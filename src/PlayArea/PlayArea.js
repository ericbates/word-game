import { useState, useEffect } from 'react';
import KeyboardArea from './KeyboardArea/KeyboardArea';
import PreviousGuesses from './PreviousGuesses';
import CurrentGuess from './CurrentGuess';
import './PlayArea.css';

//The main play area
//Displays current input line and previous guesses
const PlayArea = (props) => {
  //TEMPORARY DUMMY DATA
  const previousGuesses = ['was', 'one', 'two', 'four', 'tear', 'blizzard'];

  const [currentGuess, setCurrentGuess] = useState('');

  //listen for keystrokes
  useEffect(() => {
    const handleKeyDown = (event) => {
      //check if pressed key is a single letter
      if(/^[a-zA-Z]{1}$/.test(event.key)) {
        
      }
      if(event.key === 'Enter') {
        setCurrentGuess(prevCurrentGuess => prevCurrentGuess.concat("a"));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  return (
    <>
      <section id='play-area'>
        <div id='play-area-overflow-scroll'>
          <PreviousGuesses guesses={previousGuesses} />
          <CurrentGuess guess={props.currentGuess} />
        </div>
      </section>
      <KeyboardArea />
    </>
  )
}

export default PlayArea;