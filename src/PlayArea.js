//A letter to be displayed in the PlayArea
const Letter = (props) => {
  const letter = props.value;
  return (
    <div className="letter">
      <p>{letter}</p>
    </div>
  );
};

//A row in the PlayArea
const PlayRow = (props) => {
  const word = props.word;
  const rowNum = props.rowNum;

  //create a Letter component for each letter in the word
  const letters = [...word].map((letter, index) => <Letter value={letter} key={`${rowNum},${index}`} />);

  return (
    <div className="play-row">
      {letters}
    </div>
  );
};

//The main play area
//Displays current input line and previous guesses
const PlayArea = () => {
  //TEMPORARY DUMMY DATA
  const previousGuesses = ['was', 'one', 'two', 'four', 'tear'];

  const rows = previousGuesses.map((guess, index) => <PlayRow word={guess} rowNum={index} key={guess} />);

  return (
    <div className="play-area">
      {rows}
    </div>
  );
};

export default PlayArea;