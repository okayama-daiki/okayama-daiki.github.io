---
name: bookshelf-update
description: "okayama-daiki.github.io の Bookshelf に読了した本・コメントを登録し、書誌確認、書影取得、ビルド、コミット・push、GitHub Pages 公開確認を行う。ユーザーがこの本棚の文脈で「○○を読んだ」「本を追加して」と伝えたときに使う。"
---

# Bookshelf Update

## 対象と入力

この skill が置かれたリポジトリ専用。`.agents/skills/bookshelf-update/` から
3 階層上をプロジェクトルートとし、コマンドはそのディレクトリで実行する。
`package.json` の name が `okayama-daiki.github.io` であることを確認する。

データは `src/data/books.mjs` の `books` 配列。新しい読了本を先頭へ追加する。
`note` はユーザーのコメントを原文どおりに格納し、`favorite` は指定がある本にだけ付ける。
カテゴリは小説なら `Fiction`、それ以外は `Non-fiction`、
`Technical / Research`、`Other` から選ぶ。

この本棚の読了報告は追加・ビルド・コミット・push・公開確認まで進める、という
既存のユーザー設定として扱う。「追加だけ」「コミットだけ」「まだ公開しない」など
現在の依頼で範囲が指定された場合は、その範囲で止める。
この設定は他のリポジトリや本棚以外の変更の公開許可にはならない。

## 登録

1. `git status --short` と書籍データを確認する。ユーザーがすでに保存した
   変更は差分を確認して使う。追加がまだ存在しなければ、書誌を調べて登録する。
2. 出版社の公式ページ、版元ドットコム、国立国会図書館でタイトル・著者・ISBN を
   確認する。版や表紙の指定があれば一致する ISBN を使う。版不明なら発売済みの
   文庫版を優先し、使用する版を短く伝える。書影取得のために別作品・別版へ
   ISBN を変更しない。同名作品を特定できない場合は著者を確認する。
3. リポジトリの `scripts/add-book.mjs` を使う。外部情報とコメントは
   シェル引数として正しく引用し、コマンドとして解釈させない。

    ```sh
    npm run add:book -- --title '本のタイトル' --author '著者名' --isbn '9784344434950' --note '原文のコメント'
    ```

    `--favorite`、`--category`、`--dry-run` を必要に応じて付ける。
    ISBN の重複はスキップされ、同じタイトル・著者の別 ISBN は拒否される。
    既存本へのコメント追加や Favorite 更新は該当エントリを直接編集する。
    複数冊の指定順を保つなら、末尾に指定された本から順に helper で追加する。

4. `npm run build` と `git diff --check` を実行し、差分で文字列を確認する。
   ビルドが書影を ISBN から取得し `public/images/books/` に保存する。
   取得先は版元ドットコムのみ。404 などで書影がなければ既存のタイトルによる
   代替表示でよい（ユーザー承認済み）。他サイトの書影取得を追加する必要はない。
   カバー欠落は公開の阻害条件ではないが、ビルド失敗は解消してから公開する。

## コミットと公開

- 通常は今回の `src/data/books.mjs` の変更をコミットする。既存の無関係な
  編集は含めず、同じファイル内に混在するときも差分を選んでステージする。
  `public/images/books/` は ignore 対象で、CI が取得する。
- `git fetch origin` でリモートを確認する。リモートが進んでいれば今回の未公開
  コミットを `origin/main` 上へ統合し、必要なら再ビルドする。force push は使わない。
- `git push origin main` で `.github/workflows/cy.yaml` が起動する。
  `gh run list --workflow cy.yaml --branch main --json databaseId,headSha,status,conclusion,url`
  から **push した SHA と一致する run** を選ぶ。直後は旧 run しか出ないことがある。
- 該当 run を `gh run watch RUN_ID --exit-status --interval 10` で確認する。
  待機中は定期的に進捗を伝える。失敗時はログから原因を確認し、今回の変更に
  起因する問題を修正する。依存関係更新など別作業へ自動的に広げない。
- 成功後は `https://okayama-daiki.github.io/bookshelf/` の HTML で追加したタイトルと
  コメントを確認する。反映待ちの場合はデプロイ成功と実ページ未確認を区別する。
- 完了報告は追加本、コメント反映、commit hash、公開先、書影の欠落があれば
  その状態を簡潔に伝える。新しい本がない場合は空コミットを作らない。
