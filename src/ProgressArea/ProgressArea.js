import {useEffect, useRef} from 'react';
import GuessStats from './GuessStats';
import FoundAnswers from './FoundAnswers';
import ProgressIcons from './ProgressIcons';
import Instructions from './Instructions';
import '../css/ProgressArea.css';

const ProgressArea = ({previousGuesses, foundAnswers, maxGuesses, totalWords, title}) => {
  const numGuesses = previousGuesses.length;

  //ref to automatically scroll when progress icons fill ProgressIcons area
  const bottomOfProgressIconsRef = useRef(null);

  //when numGuesses changes, scroll to the bottom of the ProgressIcons area
  useEffect(() => {
    if(numGuesses) {
      bottomOfProgressIconsRef.current.scrollIntoView();
      //scrollIntoView({ behavior: 'smooth' }) appears to be broken in Chrome
      //produces inconsistent results, removed for now
    }
  }, [numGuesses]);
  
  
  return (
    <section id='progress-area'>
      <GuessStats numGuesses={numGuesses} maxGuesses={maxGuesses} />
      <FoundAnswers foundAnswers={foundAnswers} />
      { /* display Instructions when no guesses, replace Instructions with ProgressIcons after first guess */
        numGuesses > 0
        ? <ProgressIcons previousGuesses={previousGuesses} bottomOfProgressIconsRef={bottomOfProgressIconsRef} />
        : <Instructions maxGuesses={maxGuesses} totalWords={totalWords} title={title} />
      }
    </section>
  );
}

export default ProgressArea;