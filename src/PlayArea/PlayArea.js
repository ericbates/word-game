import { useState, useEffect, useCallback } from 'react';
import KeyboardArea from './KeyboardArea/KeyboardArea';
import PreviousGuesses from './PreviousGuesses';
import CurrentGuess from './CurrentGuess';
import './PlayArea.css';

//The main play area
//Displays current input line and previous guesses
//Displays KeyboardArea as child component
const PlayArea = (props) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const typeLetter = useCallback((letter) => {
    setCurrentGuess(prevCurrentGuess => prevCurrentGuess.concat(letter));
  }, [])

  const deleteLetter = useCallback(() => {
    if(currentGuess.length > 0) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.substring(0, prevCurrentGuess.length - 1));
    }
  }, [currentGuess])

  //listen for keystrokes
  useEffect(() => {
    const handleKeyDown = (event) => {
      //check if pressed key is a single letter
      if(/^[a-zA-Z]{1}$/.test(event.key)) {
        typeLetter(event.key);
      } else if(event.key === 'Enter') {
        //setCurrentGuess(prevCurrentGuess => prevCurrentGuess.concat("a"));
      } else if(event.key === 'Delete' || event.key === 'Backspace') {
        deleteLetter();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [typeLetter, deleteLetter])

  return (
    <>
      <section id='play-area'>
        <div id='play-area-overflow-scroll'>
          <PreviousGuesses guesses={props.previousGuesses} />
          <CurrentGuess guess={currentGuess} />
        </div>
      </section>
      <KeyboardArea />
    </>
  )
}

export default PlayArea;