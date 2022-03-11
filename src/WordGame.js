import { useState } from 'react';
import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import './css/WordGame.css';
import './css/StatusColors.css';
import React from 'react';

const maxGuesses = 20;

const WordGame = () => {
  //an array of previousGuess objects
  //{ guess: string representation of the guess,
  //  status: an array representing the status of each letter of the guess
  //  wordNum: an integer respresenting the index of the word being guessed
  //  correct: a boolean representing if the current word is the word being guessed }
  //status array can be an int of values 0, 1, or 2
  //  0 = absent (gray)
  //  1 = misplaced (yellow)
  //  2 = correct (green)
  const [previousGuesses, setPreviousGuesses] = useState([]);

  //an array containing strings of correctly guessed words
  const [foundAnswers, setFoundAnswers] = useState([]);

  return (
    <div className='word-game-app'>
      <header>
        <h1>Word Game</h1>
      </header>
      <main>
          <ProgressArea
            previousGuesses={previousGuesses}
            maxGuesses={maxGuesses}
            foundAnswers={foundAnswers}
          />
          <PlayArea
            previousGuesses={previousGuesses}
            foundAnswers={foundAnswers}
            setPreviousGuesses={setPreviousGuesses}
            setFoundAnswers={setFoundAnswers}
          />
      </main>
    </div>
  );
}

export default WordGame;
