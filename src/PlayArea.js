import Row from './Row';

//The main play area
//Displays current input line and previous guesses
const PlayArea = () => {
  //TEMPORARY DUMMY DATA
  const previousGuesses = ['was', 'one', 'two', 'four', 'tear'];

  const rows = [];
  previousGuesses.forEach((guess, index) => {
    rows.push(
      <Row word={guess} rowNum={index} key={guess} />
    );
  });

  return (
    <div className="play-area">
      {rows}
    </div>
  );
};

export default PlayArea;