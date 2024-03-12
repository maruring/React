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
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    const chat = {
      text: nextDataset.question,
      type: "question"
    };
    addChats(chat);
    setCurrentId(nextQuestionId);
    setAnswers(nextDataset.answers);
  };

  // answerボタンを押下した際の挙動
  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true){
      case(nextQuestionId === 'init'):
        displayNextQuestion(nextQuestionId);
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: "answer"
        };
        addChats(chat);
        const nextDataset = dataset[nextQuestionId];
        displayNextQuestion(nextQuestionId, nextDataset);
    };
  };

  // チャットが入った時に一番下にスクロールする
  
  
  useEffect(() => {
    // 最初の表示
    const initDataset = dataset[currentId];
    displayNextQuestion(currentId, initDataset);
  }, []);
  
  return (
    // c-sectionでブラウザの大きさに合わせる
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats}/>
        <AnswersList answers={answers} select={selectAnswer} />
      </div>
    </section>
  );
}

export default App;
