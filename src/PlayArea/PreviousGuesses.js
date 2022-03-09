//possible Row child component statuses
const statuses = ['absent', 'misplaced', 'correct'];

//Renders all previous guesses for the current word
//Each letter will have a status
//3 possible statuses:
//    absent (gray)
//    misplaced (yellow)
//    correct (green)
const PreviousGuesses = (props) => {
  const guesses = props.guesses;

  const rows = guesses.map((guess, guessIndex) => {
    const wordArr = [...guess];
    const wordLength = wordArr.length;
    return (
      //build a 'word-row' div for each word
      <div className='word-row' key={`word_${wordLength}-${guessIndex}`}>
        {wordArr.map((letter, letterIndex) => {
          //TEMPORARY for styling purposes
          const status = statuses[Math.floor(Math.random() * 3)];

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

export default PreviousGuesses;