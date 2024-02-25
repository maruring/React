import './App.css';
import { BlueButton, Article } from './components/index.js'; 

function App() {
  return (
    <div className="App">
      <BlueButton />
      <Article
        title={'タイトル'}
        content={'内容'}
      />
    </div>
  );
};

export default App;
