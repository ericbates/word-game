//A letter to be displayed in the PlayArea
const ProgressIcon = (props) => {
  const status = props.status;
  return (
    <div className={`progress-icon ${status}`}></div>
  );
};

//A row in the PlayArea
const ProgressRow = (props) => {
  const status = props.status;
  const rowNum = props.rowNum;

  //create a Letter component for each letter in the word
  const icons = status.map((iconStatus, index) => <ProgressIcon status={iconStatus} key={`progress-${rowNum},${index}`} />);

  return (
    <div className="progress-row">
      {icons}
    </div>
  );
};

//The main play area
//Displays current input line and previous guesses
const Progress = () => {
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

  const rows = currentProgress.map((status, index) => <ProgressRow status={status} rowNum={index} key={`progress-${index}`} />);

  return (
    <section className="progress">
      {rows}
    </section>
  );
};

export default Progress;