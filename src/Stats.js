import Answers from './Answers';
import Guesses from './Guesses';

const Stats = () => {
  return (
    <div className="stats-bar">
      <Answers />
      <Guesses />
    </div>
  );
};

export default Stats;