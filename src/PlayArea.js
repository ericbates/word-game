import Row from './Row';

//The main play area
//Displays current input line and previous guesses
const PlayArea = () => {
  //TEMPORARY DUMMY DATA
  const previousGuesses = ['was', 'one', 'two', 'four', 'tear', 'mezzanine'];

  //create Row components for each previous guess
  const rows = previousGuesses.map((guess, index) => {
    const wordArr = [...guess];
    return <Row arr={wordArr} rowNum={index} rowType='word' key={`word-${index}`} />
  });

  return (
    <section className="play-area">
      {rows}
    </section>
  );
};

export default PlayArea;