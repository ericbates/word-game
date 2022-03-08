import { useState, useEffect } from 'react';
import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import "./css/WordGame.css";
import './css/StatusColors.css';
import React from 'react';

const WordGame = () => {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');

  //listen for keystrokes
  useEffect(() => {
    const handleKeyDown = (event) => {
      //check if pressed key is a single letter
      if(/^[a-zA-Z]{1}$/.test(event.key)) {
        
      }
      if(event.key === 'Enter') {
        setCurrentGuess(prevCurrentGuess => prevCurrentGuess.concat("a"));
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
          <ProgressArea previousGuesses={previousGuesses} />
          <PlayArea previousGuesses={previousGuesses} currentGuess={currentGuess} />
      </main>
    </div>
  );
}

export default WordGame;
