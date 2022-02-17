//Stats header
//Displays correct guesses and number of remaining guesses
const Stats = (props) => {
  const totalGuesses = props.totalGuesses;
  const numGuesses = props.numGuesses;
  const correctGuesses = props.correctGuesses;

  return (
    <div className="stats-bar">
    </div>
  );
};

export default Stats;