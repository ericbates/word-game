//Render remaining and total guesses
const GuessStats = ({maxGuesses, numGuesses}) => {
  const className = (maxGuesses - numGuesses < 4) ? 'low-guesses' : '';

  return (
    <div id='guess-stats'>
        <h1><span id='num-guesses' className={className}>{numGuesses}</span>/{maxGuesses}</h1>
    </div>
  );
}

export default GuessStats;