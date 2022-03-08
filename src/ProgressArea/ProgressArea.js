import GuessStats from "./GuessStats";
import FoundAnswers from "./FoundAnswers";
import ProgressIcons from "./ProgressIcons";
import './ProgressArea.css';

const ProgressArea = (props) => {
  const previousGuesses = props.previousGuesses;
  const totalGuesses = 20;
  const numGuesses = previousGuesses.length;

  //TEMPORARY DUMMY DATA
  const foundAnswers = ['two', 'tear', 'index', 'apples', 'jukebox', 'aaaaaaaa'];
  const currentProgress = [
    ['absent', 'absent', 'misplaced'],
    ['absent', 'correct', 'correct'],
    ['correct', 'correct', 'correct'],
    ['absent', 'absent', 'absent', 'correct'],
    ['correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct', 'correct', 'correct', 'correct']
  ];

  return (
    <section id="progress-area">
      <div id="progress-area-overflow-scroll">
        <GuessStats numGuesses={numGuesses} totalGuesses={totalGuesses} />
        <FoundAnswers answers={foundAnswers} />
        <ProgressIcons currentProgress={currentProgress} />
      </div>
    </section>
  );
}

export default ProgressArea;