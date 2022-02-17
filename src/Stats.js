//Stats header
//Displays correct guesses and number of remaining guesses
const Stats = (props) => {
  const totalGuesses = props.totalGuesses;
  const numGuesses = props.numGuesses;
  const correctGuesses = props.correctGuesses;

  const numCorrect = correctGuesses.length;
  const numCorrectString = numCorrect === 1 ? `${numCorrect} word` : `${numCorrect} words`;
  const answers = correctGuesses.map((guess, index) => <h2 key={`correct-${index}`}>{guess.toUpperCase()}</h2>);


  return (
    <div className="stats-bar">
      <div className="correct-guesses">
        <h2 className="num-correct">{numCorrectString}</h2>
        {answers}
      </div>
      <div className="guess-stats">
        <h1><span className="num-guesses">{numGuesses}</span>/{totalGuesses} Guesses</h1>
      </div>
    </div>
  );
};

export default Stats;