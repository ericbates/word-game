//Render remaining and total guesses
const GuessStats = (props) => {
  const className = (props.maxGuesses - props.numGuesses < 4) ? 'low-guesses' : '';

  return (
    <div id='guess-stats'>
        <h1><span id='num-guesses' className={className}>{props.numGuesses}</span>/{props.maxGuesses}</h1>
    </div>
  );
}

export default GuessStats;