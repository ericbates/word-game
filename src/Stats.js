import Answers from './Answers';
import Guesses from './Guesses';

//Stats header
//Displays correct guesses and number of remaining guesses
const Stats = () => {
  return (
    <div className="stats-bar">
      <Answers />
      <Guesses />
    </div>
  );
};

export default Stats;