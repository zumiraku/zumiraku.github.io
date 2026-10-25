# zumiraku.github.io

図美楽（ずみらく）の開発者向けプロフィールサイト。

https://zumiraku.github.io/

## 構成

ビルド不要の静的サイト。フレームワーク・外部ライブラリ・外部フォントは使っていない。

```
index.html        1枚で完結するページ
404.html          見つからないとき
assets/style.css  配色は data-theme で切り替え
assets/app.js     出現・カウントアップ・配色の記憶
assets/favicon.svg
assets/ogp.png    SNSに出るカード画像
```

## 動かし方

そのまま開くか、適当なサーバーを立てる。

```sh
python -m http.server 8000
```

main に push すると GitHub Pages に公開される。
