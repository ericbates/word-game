//Stats header
//Displays correct guesses and number of remaining guesses
const Stats = (props) => {
  const totalGuesses = props.totalGuesses;
  const numGuesses = props.numGuesses;
  const correctGuesses = props.correctGuesses;

  const answers = [];
  correctGuesses.forEach(guess => {
    answers.push(
      <p>{guess}</p>
    );
  });

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