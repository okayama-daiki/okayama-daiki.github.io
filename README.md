# okayama.daiki.dev

Personal website by [@okayama-daiki](https://github.com/okayama-daiki)

## 備忘録

## Localization

[Lingui](https://lingui.dev) を使用しています。他に [i18next](https://www.i18next.com) という選択肢がありましたが、翻訳辞書の管理コストの低さから [Lingui](https://lingui.dev) を選択しました。

### How to localize

1. `<Trans>` コンポーネントで翻訳したいテキストを囲みます

```tsx
import { Trans } from "@lingui/react/macro";

export default function About() {
  return <Trans>I am a software engineer in Japan. </Trans>;
}
```

2. 以下のコマンドを実行して翻訳辞書を生成します

```bash
$ bun run extract
$ lingui extract
✔
Catalog statistics for src/locales/{locale}/messages:
┌─────────────┬─────────────┬─────────┐
│ Language    │ Total count │ Missing │
├─────────────┼─────────────┼─────────┤
│ en (source) │      5      │    -    │
│ ja          │      5      │    1    │
└─────────────┴─────────────┴─────────┘
```

3. `src/locales` 以下に翻訳辞書が生成されます。`ja/messages.po`を編集して翻訳します。
4. 以下のコマンドを実行して翻訳辞書をビルドします

```bash
$ bun run compile
$ lingui compile --typescript
Compiling message catalogs…
Done!
```
