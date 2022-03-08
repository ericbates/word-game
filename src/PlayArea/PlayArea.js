import KeyboardArea from '../KeyboardArea/KeyboardArea';
import PreviousGuesses from "./PreviousGuesses";
import CurrentGuess from "./CurrentGuess";
import "./PlayArea.css";

//The main play area
//Displays current input line and previous guesses
const PlayArea = (props) => {
  //TEMPORARY DUMMY DATA
  //const previousGuesses = ['was', 'one', 'two', 'four', 'tear', 'blizzard'];


  return (
    <>
      <section id="play-area">
        <div id="play-area-overflow-scroll">
          <PreviousGuesses guesses={props.previousGuesses} />
          <CurrentGuess guess={props.currentGuess} />
        </div>
      </section>
      <KeyboardArea />
    </>
  );
}

export default PlayArea;