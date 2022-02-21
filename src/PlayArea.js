import Row from './Row';

//The main play area
//Displays current input line and previous guesses
const PlayArea = () => {
  //TEMPORARY DUMMY DATA
  const previousGuesses = ['was', 'one', 'two', 'four', 'tear'];

  //create Row components for each previous guess
  const rows = previousGuesses.map((guess, index) => {
    const wordArr = [...guess];
    return <Row arr={wordArr} rowNum={index} rowType='word' key={`word-${index}`} />
  });

  return (
    <section className="play-area">
      {rows}
      {/*TEMPORARY*/}
      <div className="row word">
        <div className="letter default">
          <h1>A</h1>
        </div>
        <div className="letter default">
          <h1>B</h1>
        </div>
        <div className="letter default empty">
          
        </div>
        <div className="letter default empty">
          
        </div>
      </div>
    </section>
  );
};

export default PlayArea;