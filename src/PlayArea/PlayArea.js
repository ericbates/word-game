import PreviousGuesses from "./PreviousGuesses";
import CurrentGuess from "./CurrentGuess";
import "./PlayArea.css";

//The main play area
//Displays current input line and previous guesses
const PlayArea = () => {
  //TEMPORARY DUMMY DATA
  const previousGuesses = ['was', 'one', 'two', 'four', 'tear', 'blizzard'];

  return (
    <section id="play-area">
      <div id="play-area-overflow-scroll">
        <PreviousGuesses guesses={previousGuesses} />
        <CurrentGuess />
      </div>
    </section>
  );
}

export default PlayArea;