import './assets/styles/style.css';
import React from "react";
import { useState, useEffect, useCallback } from "react";
import defaultDataset from './DataSchema/dataset';
import { AnswersList, Chats, FormDialog } from './components/index';

function App() {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState(defaultDataset);
  const [open,  setOpen] = useState(false); // モーダルのOpen/Close

  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  },[setChats]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  });

  // 次の質問を出す
  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    console.log("questionのレンダリング");
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
    console.log("answerのレンダリング");
    switch(true){
      case(nextQuestionId === 'init'):
        displayNextQuestion(nextQuestionId);
        break;
      case(/https:*/.test(nextQuestionId)):
        // aタグを作成する
        const a = document.createElement('a');
        a.href = nextQuestionId;
        // targetを_blankにすると別タブで外部表示をできるようにする
        a.target = '_blank';
        a.click();
        break;
      // nextQuestionIdがcontactの場合にダイアログを表示する
      case(nextQuestionId === 'contact'):
        handleClickOpen();
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: "answer"
        };
        addChats(chat);
        const nextDataset = dataset[nextQuestionId];
        // delayを作ることでchatしている感をだす
        setTimeout(() => displayNextQuestion(nextQuestionId, nextDataset), 750);
    };
  };

  // チャットが入った時に一番下にスクロールする
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });
  
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
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default App;
