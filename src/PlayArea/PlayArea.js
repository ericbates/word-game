import {useState, useEffect, useCallback, useRef} from 'react';
import Keyboard from './Keyboard';
import PreviousGuesses from './PreviousGuesses';
import CurrentGuess from './CurrentGuess';
import '../css/PlayArea.css';

//The main interactive area of the app
//manages currentGuess state
//updates previousGuess state upon currentGuess submit
//parent component of PreviousGuesses, CurrentGuesses, and Keyboard
const PlayArea = ({previousGuesses, setPreviousGuesses, foundAnswers, startingWordLength, endOfGame}) => {
  const [currentGuess, setCurrentGuess] = useState('');

  //wordNum: index of the current word being guessed
  //wordLength: the length of the current word being guessed
  const wordNum = foundAnswers.length;
  const wordLength = wordNum + startingWordLength;

  //ref to automatically scroll when guesses fill PlayArea
  const bottomOfPlayAreaRef = useRef(null);


  //TEMPORARY DUMMY FUNCTION to fake validation
  const validateGuess = useCallback((guess) => {
    const status = [];
    let correct = true;
    [...guess].forEach((letter, index) => {
      status[index] = Math.floor(Math.random() * 3);
      if(status[index] !== 2) {
        correct = false;
      }
    });
    const guessObject = {
      guess,
      status,
      wordNum,
      correct
    };
    return guessObject;
  }, [wordNum]);

  //TEMPORARY DUMMY FUNCTION used to fake a correct guess
  const foundAnswer = useCallback(() => {
    if(currentGuess.length === wordLength) {
      const status = [];
      for(let i = 0; i < wordLength; i++) {
        status[i] = 2;
      }
      const previousGuess = {
        guess: currentGuess,
        status: status,
        wordNum: wordNum,
        correct: true
      };
      setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, previousGuess]);
      setCurrentGuess('');
    }
  }, [currentGuess, wordLength, setPreviousGuesses, wordNum]);

  //recieves a single character and adds it to the current guess
  const typeLetter = useCallback((letter) => {
    if(currentGuess.length < wordLength) {
      setCurrentGuess(prevCurrentGuess => {
        //can occasionally set currentGuess.length > wordLength when spamming letters and submits
        //substring(0, wordLength) enforces guesses will never be larger than wordLength
        return prevCurrentGuess.concat(letter.toLowerCase()).substring(0, wordLength);
      });
    }
  }, [currentGuess, wordLength]);

  //removes most recently added character from the current guess
  const deleteLetter = useCallback(() => {
    if(currentGuess.length > 0) {
      setCurrentGuess(prevCurrentGuess => prevCurrentGuess.substring(0, prevCurrentGuess.length - 1));
    }
  }, [currentGuess]);

  //submits the current guess to be added to the previousGuesses state
  const submitGuess = useCallback(() => {
    if(currentGuess.length === wordLength) {
      setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, validateGuess(currentGuess)]);
      setCurrentGuess('');
    }
  }, [currentGuess, wordLength, setPreviousGuesses, validateGuess]);


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

    if(!endOfGame) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [typeLetter, deleteLetter, submitGuess, foundAnswer, endOfGame]);

  //when previousGuesses changes, scroll to the bottom of the play-area
  useEffect(() => {
    bottomOfPlayAreaRef.current.scrollIntoView();
    //scrollIntoView({ behavior: 'smooth' }) appears to be broken in Chrome
    //produces inconsistent results, removed for now
  }, [previousGuesses]);

  return (
    <>
      <section id='play-area'>
        <div id='play-area-overflow-scroll'>
          <PreviousGuesses previousGuesses={previousGuesses} wordNum={wordNum} />
          <CurrentGuess currentGuess={currentGuess} wordLength={wordLength} wordNum={wordNum}/>
          <div ref={bottomOfPlayAreaRef} />
        </div>
      </section>
      <Keyboard
        typeLetter={typeLetter}
        deleteLetter={deleteLetter}
        submitGuess={submitGuess}
        previousGuesses={previousGuesses}
        wordNum={wordNum}
        endOfGame={endOfGame}
      />
    </>
  );
}

export default PlayArea;