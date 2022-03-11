//Render remaining and total guesses
const GuessStats = (props) => {
  return (
    <div id='guess-stats'>
        <h1><span id='num-guesses'>{props.numGuesses}</span>/{props.maxGuesses}</h1>
    </div>
  );
}

export default GuessStats;