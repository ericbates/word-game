const Letter = (props) => {
  const letter = props.value;
  return (
    <div className="letter">
      <p>{letter}</p>
    </div>
  );
};

const Row = (props) => {
  const word = props.word;
  const rowNum = props.rowNum;

  //create a Letter component for each letter in the word
  const letters = [...word].map((letter, index) => <Letter value={letter} key={`${rowNum},${index}`} />);

  return (
    <div className="row">
      {letters}
    </div>
  );
};

export default Row;