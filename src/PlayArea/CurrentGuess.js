//Renders the active input row
const CurrentGuess = (props) => {
  const currentGuess = props.currentGuess;
  const wordLength = props.wordLength;

  const letters = [];
  for(let i = 0; i < wordLength; i++) {
    if(i < currentGuess.length) {
      letters.push(
        <div className='letter' key={`current-guess_${i}`}>
          <h1>{currentGuess.charAt(i).toUpperCase()}</h1>
        </div>
      );
    } else {
      letters.push(
        <div className='letter empty' key={`current-guess_${i}`}></div>
      );
    }
  }

  return (
    <div id='current-guess'>
      <div className={props.wordRowClassName}>
        {letters}
      </div>
    </div>
  );
}

export default CurrentGuess;