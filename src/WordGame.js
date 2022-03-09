import { useState, useEffect } from 'react';
import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import './css/WordGame.css';
import './css/StatusColors.css';
import React from 'react';

const WordGame = () => {
  const [previousGuesses, setPreviousGuesses] = useState([]);

  return (
    <div className='word-game-app'>
      <header>
        <h1>Word Game</h1>
      </header>
      <main>
          <ProgressArea previousGuesses={previousGuesses} />
          <PlayArea previousGuesses={previousGuesses} />
      </main>
    </div>
  )
}

export default WordGame;
