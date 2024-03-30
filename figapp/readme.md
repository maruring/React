# Reactを動かす
## 環境作成
1. 任意のterminalを起動してfigappディレクトリに移動
2. 以下のコマンドでイメージを作成
```
docker-compose build
```

3. 以下のコマンドでコンテナを作成
chatbotサービスを動かしてreactのプロジェクトを作成する  
```
docker-compose run --rm app sh -c 'npx create-react-app fig-app'
```

4. 以下のコマンドでコンテナを起動
```
docker-compose up -d
```

5. 問題なさそうであれば、ブラウザ上で http://localhost:3000 にアクセスする
   *アクセスできるまでに5分ほどかかる場合がある

6. HotReloadを有効にするためpackage.jsonのscriptsを以下の内容にする
```
"scripts": {
   "start": "WATCHPACK_POLLING=true react-scripts start",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
}
```

7. 以下のコンテナに入りコマンドで必要なパッケージをインストールする
```
cd fig-app
npm install npm install @mui/material @emotion/react @emotion/styled
npm install aws-amplify @aws-amplify/ui-react
```