import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

const help = `Add a book to the beginning of the bookshelf.

npm run add:book -- --title '本のタイトル' --author '著者名' --isbn 9784344434950
  [--note 'コメント'] [--favorite] [--category Fiction] [--dry-run]

--file PATH selects another books.mjs file (for an isolated preview or test).
The default category is Fiction. Existing books are never updated implicitly.
This command only edits book data; run npm run build to download covers.`;

async function main() {
  const { values } = parseArgs({
    options: {
      title: { type: "string" },
      author: { type: "string" },
      isbn: { type: "string" },
      note: { type: "string" },
      category: { type: "string", default: "Fiction" },
      favorite: { type: "boolean", default: false },
      "dry-run": { type: "boolean", default: false },
      file: { type: "string" },
      help: { type: "boolean", short: "h", default: false },
    },
  });

  if (values.help) {
    console.log(help);
    return;
  }
  for (const key of ["title", "author", "isbn"]) {
    if (!values[key]?.trim()) throw new Error(`--${key} is required.`);
  }

  const isbn = values.isbn.replaceAll("-", "").replace(/\s/g, "");
  if (!/^97[89]\d{10}$/.test(isbn)) {
    throw new Error("Use a 13-digit book ISBN beginning with 978 or 979.");
  }
  const checksum = [...isbn].reduce(
    (sum, digit, index) => sum + Number(digit) * (index % 2 === 0 ? 1 : 3),
    0,
  );
  if (checksum % 10 !== 0) throw new Error("ISBN check digit is invalid.");

  const categories = ["Fiction", "Non-fiction", "Technical / Research", "Other"];
  if (!categories.includes(values.category)) {
    throw new Error(`--category must be one of: ${categories.join(", ")}`);
  }

  const book = {
    title: values.title.trim(),
    author: values.author.trim(),
    isbn,
    category: values.category,
    ...(values.favorite ? { favorite: true } : {}),
    ...(values.note !== undefined ? { note: values.note } : {}),
  };
  const path = values.file
    ? resolve(values.file)
    : fileURLToPath(new URL("../src/data/books.mjs", import.meta.url));
  const source = await readFile(path, "utf8");
  const { books } = await import(pathToFileURL(path).href);
  if (!Array.isArray(books)) throw new Error("Target must export a books array.");

  const existing = books.find(
    (entry) => entry.isbn.replaceAll("-", "").replace(/\s/g, "") === isbn,
  );
  if (existing) {
    console.log(`Already present: ${existing.title} (${isbn}). No changes made.`);
    return;
  }
  if (books.some((entry) => entry.title === book.title && entry.author === book.author)) {
    throw new Error("This title and author already exist with another ISBN. Check the edition before editing.");
  }

  const start = /^export const books\s*=\s*\[[ \t]*\r?\n/m.exec(source);
  if (!start) throw new Error("Cannot find the opening line of the books array.");
  const newline = start[0].endsWith("\r\n") ? "\r\n" : "\n";
  const offset = start.index + start[0].length;
  const indent = /^([ \t]*)\S/.exec(source.slice(offset))?.[1] || "    ";
  const fields = Object.entries(book)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(", ");
  const entry = `${indent}{ ${fields} },${newline}`;

  if (values["dry-run"]) {
    console.log(`Would prepend to ${path}:\n${entry.trimEnd()}`);
    return;
  }
  if ((await readFile(path, "utf8")) !== source) {
    throw new Error("Book data changed during this operation. Retry with the latest file.");
  }
  await writeFile(path, source.slice(0, offset) + entry + source.slice(offset), "utf8");
  console.log(`Added: ${book.title} (${isbn})`);
}

main().catch((error) => {
  console.error(`[bookshelf] ${error.message}`);
  process.exitCode = 1;
});
