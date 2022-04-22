import {useState, useEffect, useCallback, useRef} from 'react';
import Keyboard from './Keyboard';
import PreviousGuesses from './PreviousGuesses';
import CurrentGuess from './CurrentGuess';
import Results from './Results';
import '../css/PlayArea.css';

//The main interactive area of the app
//manages currentGuess state
//updates previousGuess state upon currentGuess submit
//parent component of PreviousGuesses, CurrentGuesses, and Keyboard
const PlayArea = ({previousGuesses, setPreviousGuesses, foundAnswers, startingWordLength, endOfGame, maxGuesses, totalWords}) => {
  const [currentGuess, setCurrentGuess] = useState('');

  //wordNum: index of the current word being guessed
  //wordLength: the length of the current word being guessed
  const wordNum = foundAnswers.length;
  const wordLength = wordNum + startingWordLength;

  //ref to automatically scroll when guesses fill PlayArea
  const bottomOfPlayAreaRef = useRef(null);

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

  //submits the current guess to the backend API for validation
  const submitGuess = useCallback(async () => {
    if(currentGuess.length === wordLength) {
      try {
        const response = await fetch(`http://localhost:9000/validate/${currentGuess}/${wordNum}`);
        const guessObject = await response.json();
        setPreviousGuesses(prevPreviousGuesses => [...prevPreviousGuesses, guessObject]);
        setCurrentGuess('');
      } catch(e) {
        console.error(e);
      }
    }
  }, [currentGuess, wordNum, wordLength, setPreviousGuesses]);


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

    if(!endOfGame) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, [typeLetter, deleteLetter, submitGuess, endOfGame]);

  //when previousGuesses changes, scroll to the bottom of the play-area
  useEffect(() => {
    if(!endOfGame) {
      bottomOfPlayAreaRef.current.scrollIntoView();
      //scrollIntoView({ behavior: 'smooth' }) appears to be broken in Chrome
      //produces inconsistent results, removed for now
    }
  }, [previousGuesses, endOfGame]);

  return (
    <>
      <section id='play-area'>
        <div id='play-area-overflow-scroll'>
          { /* display Results when endOfGame is true, otherwise display PreviousGuesses and CurrentGuess */
            endOfGame
            ? <Results previousGuesses={previousGuesses} foundAnswers={foundAnswers} maxGuesses={maxGuesses} totalWords={totalWords} />
            : <>
                <PreviousGuesses previousGuesses={previousGuesses} wordNum={wordNum} />
                <CurrentGuess currentGuess={currentGuess} wordLength={wordLength} wordNum={wordNum}/>
                <div ref={bottomOfPlayAreaRef} />
              </>
          }
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