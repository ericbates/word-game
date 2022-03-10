import React from 'react';
import statuses from '../statuses';

//Renders all previous guesses for the current word
//Each letter will have a status
//3 possible statuses:
//    absent (gray)
//    misplaced (yellow)
//    correct (green)
const PreviousGuesses = (props) => {
  const wordNum = props.wordNum;
  const guesses = props.guesses.filter(guessObject => guessObject.wordNum === wordNum);

  const rows = guesses.map((guessObject, guessIndex) => {
    const wordArr = [...guessObject.guess];
    const wordLength = wordArr.length;
    return (
      //build a 'word-row' div for each word
      <div className='word-row' key={`word_${wordLength}-${guessIndex}`}>
        {wordArr.map((letter, letterIndex) => {
          const status = statuses[guessObject.status[letterIndex]];

          return (
            //build a 'letter' div for each letter in the word
            <div
              className={`letter ${status}`}
              key={`letter_${wordLength}-${guessIndex},${letterIndex}`}
            >
              <h1>{letter.toUpperCase()}</h1>
            </div>
          )
        })}
      </div>
    )
  })
  
  return (
    <div id='previous-guesses'>
      {rows}
    </div>
  )
}

export default React.memo(PreviousGuesses);