# Reactを動かす
## 環境作成
1. 任意のterminalを起動してchatbotディレクトリに移動
2. 以下のコマンドでイメージを作成
```
docker-compose build
```

3. 以下のコマンドでコンテナを作成
chatbotサービスを動かしてreactのプロジェクトを作成する  
```
docker-compose run --rm chatbot sh -c 'npx create-react-app chatbot-app'
```

4. 以下のコマンドでコンテナを起動
```
docker-compose up -d
```

5. 問題なさそうであれば、ブラウザ上で http://localhost:3000 にアクセスする
   *アクセスできるまでに5分ほどかかる場合がある
6. docker desktopからコンテナにアクセスして以下のコマンドでパッケージをインストールする
```
npm install --save @mui/material @emotion/react @emotion/styled
```

7. HotReloadを有効にするためpackage.jsonのscriptsを以下の内容にする
```
"scripts": {
   "start": "WATCHPACK_POLLING=true react-scripts start",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
}
```

8. publicディレクトリ内にあるindex.htmlのheadタグの中に以下の内容を追加する
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

9. 以下のコマンドでfirebaseをインストールする
```
npm install -g firebase-tools
npm install -g firebase
```

10. firebaseの環境を作成したら以下のコマンドでコンテナからfirebaseにログインする
```
firebase login --no-localhost
```

11. firebaseの初期化を行う
```
firebase init
```

12. functionsディレクトリ内のindex.js内をすべてコメントアウトする

13. firebaseのdeployを行う(deployに成功したらコンソールに表示されるurlにアクセスする)
```
firebase deploy --only hosting,storage,firestore
```
# 各種勉強
## package-lock.json
Node.jsにおいてインストールするパッケージが記述されたファイル  
環境が変わってもコマンド一発で元々あったパッケージをインストールすることが可能  
pythonのrequement.txt的なもの  
- パッケージをインストールした時に新規作成・更新される（npm installコマンド実行時）
- 実際にインストールしたパッケージ情報が記載されている（npm installコマンド実行時）
- node_modules の中に入っているモジュールのすべてが記載されている
- 直接編集してはいけない
- 基本的に無視していいファイル

## JavaScriptのモジュール機能
- 原則は1ファイル = 1モジュール
- 必要な時に必要なモジュールのみを読み込む
## Material-UI
CSSで変更してもいいが、Material-UIを使用した方がbetterな場合もある  
```
import {createStyle, makeStyles} from '@material-ui/core/styles'
```
- json形式で記述
- キャメルケース(Ex: borderColor)
- 数値はそのまま
- 文字列はクォーテーションで囲む