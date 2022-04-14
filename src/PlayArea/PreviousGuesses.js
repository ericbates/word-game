import React from 'react';

//Renders all previous guesses for the current word
//Each letter will have a status
const PreviousGuesses = ({previousGuesses, wordNum}) => {
  //only interested in previousGuesses for the current word being guessed
  const currentWordPreviousGuesses = previousGuesses.filter(guessObject => guessObject.wordNum === wordNum);

  const rows = currentWordPreviousGuesses.map((guessObject, guessIndex) => {
    const guessArr = [...guessObject.guess];
    const guessLength = guessArr.length;
    return (
      //build a 'word-row' div for each word
      <div className={`word-row w${wordNum}`} key={`word_${guessLength}-${guessIndex}`}>
        {guessArr.map((letter, letterIndex) => {
          const status = guessObject.status[letterIndex];

          return (
            //build a 'letter' div for each letter in the word
            <div
              className={`letter ${status}`}
              key={`letter_${guessLength}-${guessIndex},${letterIndex}`}
            >
              <h1>{letter.toUpperCase()}</h1>
            </div>
          );
        })}
      </div>
    );
  });
  
  return (
    <div id='previous-guesses'>
      {rows}
    </div>
  );
}

export default React.memo(PreviousGuesses);