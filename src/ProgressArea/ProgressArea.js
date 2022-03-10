import GuessStats from './GuessStats';
import FoundAnswers from './FoundAnswers';
import ProgressIcons from './ProgressIcons';
import './ProgressArea.css';

const ProgressArea = (props) => {
  const totalGuesses = 20;
  const numGuesses = props.previousGuesses.length;


  return (
    <section id='progress-area'>
      <div id='progress-area-overflow-scroll'>
        <GuessStats numGuesses={numGuesses} totalGuesses={totalGuesses} />
        <FoundAnswers answers={props.foundAnswers} />
        <ProgressIcons previousGuesses={props.previousGuesses} />
      </div>
    </section>
  )
}

export default ProgressArea;