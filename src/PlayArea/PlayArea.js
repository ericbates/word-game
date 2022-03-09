import { useState, useEffect, useCallback } from 'react';
import KeyboardArea from './KeyboardArea/KeyboardArea';
import PreviousGuesses from './PreviousGuesses';
import CurrentGuess from './CurrentGuess';
import './PlayArea.css';

//The main play area
//manages currentGuess state and adds to previousGuess state upon submit
//parent component of PreviousGuesses, CurrentGuesses, and KeyboardArea
const PlayArea = (props) => {
  const [currentGuess, setCurrentGuess] = useState('');

  //length of current word, increases by 1 everytime a new word is found
  const guessLength = props.foundAnswers.length + 3;
  
  const setPreviousGuesses = props.setPreviousGuesses;

  //recieves a single character and adds it to the current guess
  const typeLetter = useCallback((letter) => {
    if(currentGuess.length < guessLength) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.concat(letter));
    }
  }, [currentGuess, guessLength])

  //finds the letter from keyboard-key div and calls typeLetter
  const typeLetterKeyboard = useCallback((event) => {
    const letter = event.currentTarget.getElementsByTagName('h3')[0].innerHTML;
    typeLetter(letter);
  }, [typeLetter])


  //removes most recently added character from the current guess
  const deleteLetter = useCallback(() => {
    if(currentGuess.length > 0) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.substring(0, prevCurrentGuess.length - 1));
    }
  }, [currentGuess])

  //submits the current guess to be added to the previousGuesses state
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
      <KeyboardArea typeLetter={typeLetterKeyboard} deleteLetter={deleteLetter} submitGuess={submitGuess} />
    </>
  )
}

export default PlayArea;