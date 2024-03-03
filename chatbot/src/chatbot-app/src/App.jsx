import './assets/styles/style.css';
import React from "react";
import { useState } from "react";
import defaultDataset from './DataSchema/dataset';

function App() {
  const data = {
    answers: [],
    chats: [],
    currentId: "init",
    dataset: defaultDataset,
    open: false
  };
  const [initData, setInitData] = useState(data);
  
  return (
    // c-sectionでブラウザの大きさに合わせる
    <section className='c-section'>
      <div className='c-box'>
        {initData.currentId}
      </div>
    </section>
  );
}

export default App;
