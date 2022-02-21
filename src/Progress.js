import Row from './Row';

//Displays status of each previous guess
//3 possible statuses:
//    absent (gray)
//    misplaced (yellow)
//    correct (green)
//Displays previous correct guesses
const Progress = (props) => {
  const correctGuesses = props.correctGuesses;

  //TEMPORARY DUMMY DATA
  const currentProgress = [
    ['absent', 'absent', 'misplaced'],
    ['absent', 'correct', 'correct'],
    ['correct', 'correct', 'correct'],
    ['absent', 'absent', 'absent', 'correct'],
    ['correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct', 'correct'],
    ['correct', 'correct', 'correct', 'correct', 'correct', 'correct', 'correct']
  ];

  //create Row components for each row of progress
  const rows = currentProgress.map((arr, index) => {
    return <Row arr={arr} rowNum={index} rowType='progress' key={`progress-${index}`} />
  });

  const answers = correctGuesses.map((guess, index) => <h4 key={`correct-${index}`}>{guess.toUpperCase()}</h4>);
  

  return (
    <section className="progress-area">
      <div className="guess-stats">
        <h1><span className="num-guesses">10</span>/20 Guesses</h1>
      </div>
      <div className="correct-guesses">
        {answers}
      </div>
      <div className="progress-icons">
        {rows}
      </div>
    </section>
  );
};

export default Progress;