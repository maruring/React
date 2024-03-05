import './assets/styles/style.css';
import React from "react";
import { useState, useEffect } from "react";
import defaultDataset from './DataSchema/dataset';
import { AnswersList, Chats } from './components/index';

function App() {
  const InitInfo = {
    answers: [],
    chats: [],
    currentId: "init",
    dataset: defaultDataset,
    open: false
  };
  const [info, setInfo] = useState(InitInfo);

  // 初期化のプロセス
  const initProcess = () => {
    const initDataset = InitInfo.dataset[InitInfo.currentId];
    const initAnswer = initDataset.answers;
    const initChat = {
      text: initDataset.question,
      type: "question"
    };
    // infoオブジェクトをコピー、変更 -> もとのinfoオブジェクトに再代入
    let _info = JSON.parse(JSON.stringify(info));
    _info.answers = initAnswer;
    _info.chats.push(initChat)
    setInfo(_info);
  };

  // 次の質問を出す
  const displayNextQuestion = (nextQuestionId) => {
    let _info = JSON.parse(JSON.stringify(info));
    const chats = _info.chats;
    chats.push({
      text: info.dataset[nextQuestionId].question,
      type: "question"
    });
    _info.currentId = nextQuestionId;
    _info.answers = _info.dataset[nextQuestionId].answers;

    setInfo(_info);
  }

  // answerボタンを押下した際の挙動
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true){
      case(nextQuestionId === 'init'):
        displayNextQuestion(nextQuestionId);
        break;
      default:
        let _info = JSON.parse(JSON.stringify(info));
        const chat = {
          text: selectedAnswer,
          type: "answer"
        };
        _info.chats.push(chat);
        // infoの更新処理
        setInfo(_info);

        displayNextQuestion(nextQuestionId);
    };
  };
  
  useEffect(() => {selectAnswer("", info.currentId)}, [info.currentId]);
  
  return (
    // c-sectionでブラウザの大きさに合わせる
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={info.chats}/>
        <AnswersList answers={info.answers} select={selectAnswer} />
      </div>
    </section>
  );
}

export default App;
