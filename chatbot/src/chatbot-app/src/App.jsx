import './assets/styles/style.css';
import React from "react";
import { useState, useEffect } from "react";
import defaultDataset from './DataSchema/dataset';
import { AnswersList } from './components/index';

function App() {
  const InitInfo = {
    answers: [],
    chats: [],
    currentId: "init",
    dataset: defaultDataset,
    open: false
  };
  const [info, setInfo] = useState(InitInfo);
  
  const initAnswer = () => {
    const initDataset = InitInfo.dataset[InitInfo.currentId];
    const initAnswer = initDataset.answers;
    // infoオブジェクトをコピー、変更 -> もとのinfoオブジェクトに再代入
    let _info = JSON.parse(JSON.stringify(info));
    _info.answers = initAnswer;
    setInfo(_info);
  }

  useEffect(() => {initAnswer()}, [info.currentId]);
  
  return (
    // c-sectionでブラウザの大きさに合わせる
    <section className='c-section'>
      <div className='c-box'>
        <AnswersList answers={info.answers}/>
      </div>
    </section>
  );
}

export default App;
