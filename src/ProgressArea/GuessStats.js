//Render remaining and total guesses
const GuessStats = (props) => {
  const maxGuesses = props.maxGuesses;
  const numGuesses = props.numGuesses;

  const className = (maxGuesses - numGuesses < 4) ? 'low-guesses' : '';

  return (
    <div id='guess-stats'>
        <h1><span id='num-guesses' className={className}>{numGuesses}</span>/{maxGuesses}</h1>
    </div>
  );
}

export default GuessStats;