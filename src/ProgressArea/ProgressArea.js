import GuessStats from './GuessStats';
import FoundAnswers from './FoundAnswers';
import ProgressIcons from './ProgressIcons';
import Instructions from './Instructions';
import '../css/ProgressArea.css';

const ProgressArea = (props) => {
  const numGuesses = props.previousGuesses.length;

  return (
    <section id='progress-area'>
        <GuessStats numGuesses={numGuesses} maxGuesses={props.maxGuesses} />
        <FoundAnswers foundAnswers={props.foundAnswers} />
        { /* display Instructions when no guesses, replace Instructions with ProgressIcons after first guess */
          numGuesses > 0
          ? <ProgressIcons previousGuesses={props.previousGuesses} />
          : <Instructions maxGuesses={props.maxGuesses} totalWords={props.totalWords} title={props.title} />
        }
    </section>
  );
}

export default ProgressArea;