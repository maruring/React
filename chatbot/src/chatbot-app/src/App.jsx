import './assets/styles/style.css';
import React from "react";
import { useState, useEffect, useCallback } from "react";
import defaultDataset from './DataSchema/dataset';
import { AnswersList, Chats } from './components/index';

function App() {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState(defaultDataset);
  const [open,  setOpen] = useState(false);

  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  },[setChats]);
  
  // 次の質問を出す
  const displayNextQuestion = (nextQuestionId) => {
    addChats()
    _info.currentId = nextQuestionId;
    _info.answers = info.dataset[nextQuestionId].answers;
    // infoの更新処理
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
  
  useEffect(() => {selectAnswer("", info.currentId)}, []);
  
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
