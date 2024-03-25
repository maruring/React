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
docker-compose run --rm study sh -c 'npx create-react-app study-app'
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
## React
- import文の肥大化を防ぐためにindex.jsというエントリポイントが存在する
- JSXという記述をすることでhtmlライクに書くことできる
### hook
React 16.8 で追加された新機能  
state などの React の機能をクラスを書かずに使えるようになる -> stateを関数コンポーネントでシンプルに扱うことができようになる
### useState
コンポーネントが内部で保持する「状態」を管理できる
### useEffect
useEffectはdomがレンダリングされる際に実行される処理を定義することができる  
### useContext
親からPropsで渡されていないのに、Contextに収容されているデータへよりシンプルにアクセスできる  
Propsのバケツリレーを解消することができる
useContextを呼び出すコンポーネントはコンテクストの値が変化するたびに毎回再レンダーされる  
### useReducer
状態管理のためのフック(useStateと似たような機能)  
```
const [state, dispatch] = useReducer(reducer, '初期値')
// reducerはstateを更新するための関数
// dispatchは、reducerを実行するための呼び出し関数
```
useReducerはオブジェクトや配列のみstateで取り扱うことができる  
### useCallback
メモ化したコールバック関数を返す  
React.memoと併用することになる 
####  メモ化
初回のみ処理を実行記録しておき、値が必要となった2回目以降は、前回の処理結果を計算することなく呼び出し値を得られるようにすること。  
propsに変化がない場合に再レンダリングをスキップできるため、パフォーマンスが向上する  
```
useCallback(callbackFunction, [deps]);
depsはuseEffectと同じで特定の要素が変化したのみだけ実行できるようにすることができる
```
### useMemo
関数の結果をメモ化することで不必要な計算をスキップしてパフォーマンスを向上させることができるhook  
useCallbackは"関数自体"をメモ化  
useMemoは"関数の結果"をメモ化

### useRef
参照を保持するためのhooks  
基本的にはDOMに対する参照でよく使用される  
HTML要素にrefという属性でuseRefの値を渡してあげることで参照できる  
Refの適した使用例  
- フォーカス、テキストの選択およびメディアの再生の管理
- アニメーションの発火
- サードパーティの DOM ライブラリとの統合
```
# Refオブジェクトを生成して、その値をメモ化する
const ref = useRef(initValue);

const value = ref.current; # 値の取り出し
const ref.current = 2; # 値を変更しているだけなので、再レンダリングが走らない
```

### 命名規則
- ファイル名とコンポーネントはパスカルケース(Ex HogeHuga.js)  
- 関数や変数名はローワーキャメルケース(Ex getHuga)