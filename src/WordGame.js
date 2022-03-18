import {useState} from 'react';
import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import './css/WordGame.css';
import './css/colors.css';

const title = 'Word Game';
const maxGuesses = 20;
const totalWords = 6;
const startingWordLength = 3;

const WordGame = () => {
  //an array of previousGuess objects
  //{ 
  //  guess: string representation of the guess
  //  status: an array representing the status of each letter of the guess
  //  wordNum: an integer respresenting the index of the word being guessed
  //  correct: a boolean representing if the current word is the word being guessed
  //}
  //status array can be an int of values 0, 1, or 2
  //  0 = absent (grey)
  //  1 = misplaced (yellow)
  //  2 = correct (green)
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const foundAnswers = previousGuesses.filter(previousGuess => previousGuess.correct);

  const endOfGame = (previousGuesses.length === maxGuesses || foundAnswers.length === totalWords) ? true : false;

  return (
    <div className='word-game-app'>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
          <ProgressArea
            previousGuesses={previousGuesses}
            maxGuesses={maxGuesses}
            totalWords={totalWords}
            foundAnswers={foundAnswers}
            title={title}
          />
          <PlayArea
            previousGuesses={previousGuesses}
            setPreviousGuesses={setPreviousGuesses}
            foundAnswers={foundAnswers}
            startingWordLength={startingWordLength}
            endOfGame={endOfGame}
          />
      </main>
    </div>
  );
}

export default WordGame;
