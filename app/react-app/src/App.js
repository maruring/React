import './App.css';
import BlueButton from './components/button';
import authorName from './components/Name';

function App() {
  const now = new Date()
  return (
    <div className="App">
      <BlueButton />
      <authorName>
        title={'Propsをやってみる'}
        content={'はじめのprops'}
        updateAt={now}
      </authorName>
    </div>
  );
}

export default App;
