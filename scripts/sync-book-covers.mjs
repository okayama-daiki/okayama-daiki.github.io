import { mkdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { books } from "../src/data/books.mjs";

const outputDirectory = fileURLToPath(new URL("../public/images/books/", import.meta.url));
const refresh = process.argv.includes("--refresh");

await mkdir(outputDirectory, { recursive: true });

async function hasUsableFile(path) {
  try {
    const file = await stat(path);
    return file.size > 500;
  } catch {
    return false;
  }
}

async function downloadCover(book) {
  const isbn = book.isbn.replaceAll("-", "");
  const destination = `${outputDirectory}${isbn}.jpg`;
  const temporary = `${destination}.tmp`;

  if (!refresh && (await hasUsableFile(destination))) return "cached";

  const response = await fetch(`https://img.hanmoto.com/bd/img/${isbn}_600.jpg`);
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok || !contentType.startsWith("image/")) {
    throw new Error(`cover unavailable (${response.status})`);
  }

  const cover = Buffer.from(await response.arrayBuffer());
  if (cover.length <= 500) throw new Error("cover response was empty");

  await writeFile(temporary, cover);
  await rename(temporary, destination);
  return "downloaded";
}

let downloaded = 0;
let cached = 0;
let failed = 0;

for (const book of books) {
  try {
    if ((await downloadCover(book)) === "downloaded") downloaded += 1;
    else cached += 1;
  } catch (error) {
    failed += 1;
    const isbn = book.isbn.replaceAll("-", "");
    await rm(`${outputDirectory}${isbn}.jpg.tmp`, { force: true });
    console.warn(`[bookshelf] ${book.title}: ${error.message}`);
  }
}

console.log(
  `[bookshelf] covers ready: ${downloaded} downloaded, ${cached} cached, ${failed} unavailable`,
);
