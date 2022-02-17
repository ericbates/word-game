import Row from './Row';

//The main play area
//Displays current input line and previous guesses
const PlayArea = () => {
  return (
    <div className="play-area">
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default PlayArea;