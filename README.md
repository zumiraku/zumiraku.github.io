# zumiraku.github.io — プロフィールページ

> **Service.01　Web・アプリ開発**ーーHTML / CSS（フレームワークなし）

図美楽（ずみらく）のプロフィールページ。アバター、短い自己紹介、各サイトへのリンクだけの1枚もの。

https://zumiraku.github.io/

## 考えたこと

プロフィールだけのページに、フレームワークもビルド工程も要りません。**HTMLとCSSのみ。JavaScriptも外部ライブラリも使っていません。**

読み込むファイルは HTML・CSS・画像の3種類だけなので、表示を待たせません。ダークモードは `prefers-color-scheme` で切り替わります。アニメーションは `prefers-reduced-motion` が有効な環境では止まります。

リンクカードはカードごとに「媒体名」と「そこに何があるか」の2行。名前だけ並べても、どれを開けばいいか分からないためです。

## 構成

```
index.html        本体
404.html          存在しないURL用
assets/style.css  配色・レイアウト（ダークモード対応）
assets/avatar.webp
assets/favicon.svg
assets/ogp.png    OGP画像
```

## 公開

`main` に push すると GitHub Pages に公開されます。ビルドはありません。

---

## 制作

**図美楽（ずみらく / zumiraku）** — システム・アプリのAIエンジニア

Web・アプリ開発／システム開発・インフラ／AI活用・セキュリティ。設計から運用まで、ひとりで通しています。実務12年。

| 媒体 | リンク | 表示名 |
|---|---|---|
| note | [note.com/zumiraku](https://note.com/zumiraku) | 図美楽 |
| Qiita | [qiita.com/zumiraku](https://qiita.com/zumiraku) | ずみらく |
| Zenn | [zenn.dev/zumiraku](https://zenn.dev/zumiraku) | ズミラク |
| YOUTRUST | [youtrust.jp/users/zumiraku](https://youtrust.jp/users/zumiraku) | 図ミラク |

表記は媒体によって揺れていますが、どれも同じ人間です。英字は zumiraku で統一しています。

返信は平日なら4時間以内、土日祝でも12時間以内。お仕事のご相談は、要件が固まっていない段階からでも構いません。NDAも対応します。
