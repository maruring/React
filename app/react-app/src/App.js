import './App.css';
import { Article } from './components/index.js'; 

function App() {
  return (
    <div className="App">
      <Article
        title={'useStateを使ってみる'}
        content={'stateはコンポーネントの内容で宣言/制御される値'}
      />
    </div>
  );
};

export default App;
