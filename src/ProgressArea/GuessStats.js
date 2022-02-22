//Render remaining and total guesses
const GuessStats = (props) => {
  const numGuesses = props.numGuesses;
  const totalGuesses = props.totalGuesses;

  return (
    <div id="guess-stats">
        <h1><span id="num-guesses">{numGuesses}</span>/{totalGuesses} Guesses</h1>
    </div>
  );
}

export default GuessStats;