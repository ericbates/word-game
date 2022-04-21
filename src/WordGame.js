import {useState} from 'react';
import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import './css/WordGame.css';
import './css/colors.css';
import {title, maxGuesses, totalWords, startingWordLength} from './globalParams';

const WordGame = () => {
  //an array of previousGuess objects
  //{ 
  //  guess: string representation of the guess
  //  status: an array representing the status of each letter of the guess
  //          status array contains strings of values: 
  //          'absent' (grey), 'misplaced' (yellow), or 'correct' (green)
  //  wordNum: an integer representing the index of the word being guessed
  //  correct: a boolean representing if the current word is the word being guessed
  //}
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const foundAnswers = previousGuesses.filter(previousGuess => previousGuess.correct);

  const endOfGame = (previousGuesses.length === maxGuesses || foundAnswers.length === totalWords);

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
            maxGuesses={maxGuesses}
            totalWords={totalWords}
          />
      </main>
    </div>
  );
}

export default WordGame;
