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

  const guessLength = props.foundAnswers.length + 3;
  const setPreviousGuesses = props.setPreviousGuesses;

  const typeLetter = useCallback((letter) => {
    if(currentGuess.length < guessLength) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.concat(letter));
    }
  }, [currentGuess, guessLength])

  const deleteLetter = useCallback(() => {
    if(currentGuess.length > 0) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.substring(0, prevCurrentGuess.length - 1));
    }
  }, [currentGuess])

  const submitGuess = useCallback(() => {
    if(currentGuess.length === guessLength) {
      setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, currentGuess]);
      setCurrentGuess('');
    }
  }, [currentGuess, guessLength, setPreviousGuesses])

  //listen for keystrokes
  useEffect(() => {
    const handleKeyDown = (event) => {
      //check if pressed key is a single letter
      if(/^[a-zA-Z]{1}$/.test(event.key)) {
        typeLetter(event.key);
      } else if(event.key === 'Delete' || event.key === 'Backspace') {
        deleteLetter();
      } else if(event.key === 'Enter') {
        submitGuess();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [typeLetter, deleteLetter, submitGuess])

  return (
    <>
      <section id='play-area'>
        <div id='play-area-overflow-scroll'>
          <PreviousGuesses guesses={props.previousGuesses} />
          <CurrentGuess guess={currentGuess} guessLength={guessLength}/>
        </div>
      </section>
      <KeyboardArea />
    </>
  )
}

export default PlayArea;