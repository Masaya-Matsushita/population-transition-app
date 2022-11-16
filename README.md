### 採用担当者様へ
実装の前半箇所にて発生したエラーが解決できず、アプリは半分ほどしか完成できていません。

### 詰まっているエラー内容
- src/pages/index.tsx で行っている getStaticProps 関数内にて、PrerenderingError が発生
  - Error occurred prerendering page "/".<br />Read more: https://nextjs.org/docs/messages/prerender-error
- vercelで本番環境へデプロイする際に発生、ローカル環境では正常にビルドが通る

### エラー解決後に考えていた実装方針
1. checkedがtrueになっている都道府県のprefCodeを取得
2. prefCodeをクエリに挿入し、「API Route」機能を使用しプロキシサーバー経由で人口推移データを取得(環境変数を使用するため)
3. 取得したデータをもとにグラフを描画
