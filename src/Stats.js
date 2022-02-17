//Stats header
//Displays correct guesses and number of remaining guesses
const Stats = (props) => {
  const totalGuesses = props.totalGuesses;
  const numGuesses = props.numGuesses;
  const correctGuesses = props.correctGuesses;

  const answers = correctGuesses.map((guess, index) => <h2 key={`correct-${index}`}>{guess.toUpperCase()}</h2>);

  return (
    <div className="stats-bar">
      <div className="correct-guesses">
        {answers}
      </div>
      <div className="guess-stats">
        <p>{numGuesses}/{totalGuesses}</p>
      </div>
    </div>
  );
};

export default Stats;