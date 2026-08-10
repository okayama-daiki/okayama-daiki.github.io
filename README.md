# okayama.daiki.dev

Personal website for Daiki Okayama, built with [Astro](https://astro.build/) and the Prima Persona design system.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The static site is generated in `dist/` and deployed to GitHub Pages by the workflow in `.github/workflows/cy.yaml`.

## Adding a book

Add one entry to `src/data/books.mjs`. The build downloads and stores its cover
automatically using the ISBN, so no manual image work is needed and visitors do
not make requests to the cover provider.

```ts
{
  title: "本のタイトル",
  author: "著者名",
  isbn: "9780000000000",
  category: "Fiction",
},
```

If no cover is available, the page shows a typographic fallback. Existing
covers are cached locally; run `npm run refresh:book-covers` to refresh them.
Use `Non-fiction`, `Technical / Research`, or `Other` for other categories.
Add `favorite: true` or `note: "短い感想"` only when you want to show them.
