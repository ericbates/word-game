//Renders the active input row
const CurrentGuess = (props) => {
  //TEMPORARY DUMMY DATA
  const guessLength = props.guessLength;
  const guess = props.guess;

  const letters = [];
  for(let i = 0; i < guessLength; i++) {
    if(i < guess.length) {
      letters.push(
        <div className='letter' key={`current-guess_${i}`}>
          <h1>{guess.charAt(i).toUpperCase()}</h1>
        </div>
      )
    } else {
      letters.push(
        <div className='letter empty' key={`current-guess_${i}`}></div>
      )
    }
  }

  return (
    <div id='current-guess'>
      <div className='word-row'>
        {letters}
      </div>
    </div>
  )
}

export default CurrentGuess;