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
  console.log("PLAYAREA");
  const [currentGuess, setCurrentGuess] = useState('');

  //length of current word, increases by 1 everytime a new word is found
  const wordNum = props.foundAnswers.length;
  const guessLength = wordNum + 3;
  
  const setPreviousGuesses = props.setPreviousGuesses;
  const setFoundAnswers = props.setFoundAnswers;

  const [keyStatuses, setKeyStatuses] = useState({});

  //console.log(props.previousGuesses);
  //console.log(wordNum);
  //console.log(keyStatuses);
  useEffect(() => {
    console.log('updatekeyboard start');
    const filteredPreviousGuesses = props.previousGuesses.filter(previousGuess => previousGuess.wordNum === wordNum);

    if(!filteredPreviousGuesses.length) {
      setKeyStatuses({});
    } else {
      const keyStatusesCopy = {...keyStatuses};
      filteredPreviousGuesses.forEach(previousGuess => {
        [...previousGuess.guess].forEach((letter, index) => {
          keyStatusesCopy[letter] = statuses[previousGuess.status[index]];
        })
      })
      setKeyStatuses(keyStatusesCopy);
    }

    console.log('updatekeyboard end');
  }, [props.previousGuesses, wordNum])

  //TEMPORARY DUMMY FUNCTION to fake validation
  const validateGuess = useCallback((guess) => {
    const status = [];
    let correct = true;
    [...guess].forEach((letter, index) => {
      status[index] = Math.floor(Math.random() * 3);
      if(status[index] !== 2) {
        correct = false;
      }
    })
    const guessObject = {
      guess,
      status,
      wordNum,
      correct
    }
    return guessObject;
  }, [wordNum])

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
      const guess = validateGuess(currentGuess);
      setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, guess]);
      setCurrentGuess('');
    }
  }, [currentGuess, guessLength, setPreviousGuesses, validateGuess])


  //TEMPORARY DUMMY FUNCTION used to fake a correct guess
  const foundAnswer = useCallback(() => {
    if(currentGuess.length === guessLength) {
      const status = [];
      for(let i = 0; i < guessLength; i++) {
        status[i] = 2;
      }
      const previousGuess = {
        guess: currentGuess,
        status: status,
        wordNum: wordNum,
        correct: true
      }
      setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, previousGuess]);
      if(previousGuess.correct) {
        setFoundAnswers(prevFoundAnswers => [...prevFoundAnswers, currentGuess]);
      }
      setCurrentGuess('');
    }
  }, [currentGuess, guessLength, setPreviousGuesses, setFoundAnswers, wordNum])


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
      } else if(event.key === 'Tab') {
        //TEMPORARY, just need to fake a correct guess
        foundAnswer();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [typeLetter, deleteLetter, submitGuess, foundAnswer])



  return (
    <>
      <section id='play-area'>
        <div id='play-area-overflow-scroll'>
          <PreviousGuesses guesses={props.previousGuesses} wordNum={wordNum}/>
          <CurrentGuess guess={currentGuess} guessLength={guessLength}/>
        </div>
      </section>
      <Keyboard typeLetter={typeLetter} deleteLetter={deleteLetter} submitGuess={submitGuess} keyStatuses={keyStatuses} />
    </>
  )
}

export default PlayArea;