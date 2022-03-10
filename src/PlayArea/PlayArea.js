import { useState, useEffect, useCallback } from 'react';
import Keyboard from './Keyboard';
import PreviousGuesses from './PreviousGuesses';
import CurrentGuess from './CurrentGuess';
import './PlayArea.css';
import statuses from '../statuses';

//The main play area
//manages currentGuess state and adds to previousGuess state upon submit
//parent component of PreviousGuesses, CurrentGuesses, and Keyboard
const PlayArea = (props) => {
  const [currentGuess, setCurrentGuess] = useState('');

  //length of current word, increases by 1 everytime a new word is found
  const guessLength = props.foundAnswers.length + 3;
  
  const setPreviousGuesses = props.setPreviousGuesses;

  //TEMPORARY DUMMY FUNCTION to fake validation
  const validateGuess = (guess) => {
    const status = [];
    [...guess].forEach((letter, index) => {
      status[index] = Math.floor(Math.random() * 3);
    })
    return status;
  }

  //updates class of Keyboard keys to show status
  const updateKeyboard = (previousGuess) => {
    [...previousGuess.guess].forEach((letter, index) => {
      statuses.forEach(status => {
        if(document.getElementById(letter).classList.contains(status)) {
          document.getElementById(letter).classList.remove(status);
        }
      })
      document.getElementById(letter).classList.add(statuses[previousGuess.status[index]]);
    })
  }

  //recieves a single character and adds it to the current guess
  const typeLetter = useCallback((letter) => {
    if(currentGuess.length < guessLength) {
      setCurrentGuess(prevCurrentGuess => {
        //can occasionally set currentGuess.length > guessLength when spamming letters and submits
        //substring(0, guessLength) enforces guesses will never be larger than guessLength
        return prevCurrentGuess.concat(letter.toLowerCase()).substring(0, guessLength);
      })
    }
  }, [currentGuess, guessLength])

  //removes most recently added character from the current guess
  const deleteLetter = useCallback(() => {
    if(currentGuess.length > 0) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.substring(0, prevCurrentGuess.length - 1));
    }
  }, [currentGuess])

  //submits the current guess to be added to the previousGuesses state
  const submitGuess = useCallback(() => {
    
    if(currentGuess.length === guessLength) {
      const status = validateGuess(currentGuess);
      const previousGuess = {
        guess: currentGuess,
        status: status
      }
      setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, previousGuess]);
      updateKeyboard(previousGuess);
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
      <Keyboard typeLetter={typeLetter} deleteLetter={deleteLetter} submitGuess={submitGuess} />
    </>
  )
}

export default PlayArea;