//Renders the active input row
const CurrentGuess = (props) => {
  //TEMPORARY DUMMY DATA
  const guessLength = 5;
  const currentGuess = props.currentGuess;

  const letters = [];
  for(let i = 0; i < guessLength; i++) {
    if(i < currentGuess.length) {
      letters.push(
        <div className='letter' key={`current-guess_${i}`}>
          <h1>{currentGuess.charAt(i).toUpperCase()}</h1>
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