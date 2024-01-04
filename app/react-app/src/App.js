import './App.css';
import { blueButton, Title } from "./components/index";

function App() {
  return (
    <div className="App">
      <Title
        title={'propsで値を渡す'}
      />
      <blueButton />
    </div>
  );
};

export default App;
