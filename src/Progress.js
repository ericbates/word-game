import Row from './Row';

//Displays status of each previous guess
//3 possible statuses:
//    absent (gray)
//    misplaced (yellow)
//    correct (green)
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

  //create Row components for each row of progress
  const rows = currentProgress.map((arr, index) => {
    return <Row arr={arr} rowNum={index} rowType='progress' key={`progress-${index}`} />
  });

  return (
    <section className="progress-area">
      {rows}
    </section>
  );
};

export default Progress;