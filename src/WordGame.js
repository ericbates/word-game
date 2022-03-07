import { useEffect } from 'react';
import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import KeyboardArea from './KeyboardArea/KeyboardArea';
import "./css/WordGame.css";
import './css/StatusColors.css';
import React from 'react';

const WordGame = () => {
  //TEMPORARY DUMMY DATA 
  const totalGuesses = 20;
  let numGuesses = 10;
  const foundAnswers = ['two', 'tear', 'index', 'apples', 'jukebox', 'aaaaaaaa'];

  //listen for keystrokes
  useEffect (() => {
    const handleKeyDown = (event) => {
      //check if pressed key is a single letter
      if(/^[a-zA-Z]{1}$/.test(event.key)){
        
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="word-game-app">
      <header>
        <h1>Word Game</h1>
      </header>
      <main>
        <div id="progress-play-container">
          <ProgressArea
            foundAnswers={foundAnswers}
            numGuesses={numGuesses}
            totalGuesses={totalGuesses}
          />
          <PlayArea />
        </div>
        <KeyboardArea />
      </main>
    </div>
  );
}

export default WordGame;
