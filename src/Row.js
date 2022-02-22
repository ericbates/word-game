//possible Row child component statuses
const statuses = ['absent', 'misplaced', 'correct', 'default'];

//A square div to indicate game progress
const ProgressIcon = (props) => {
  //3 possible statuses:
  //absent, misplaced, correct
  const status = props.status;
  return (
    <div className={`progress-icon ${status}`}></div>
  );
};


//A letter to be displayed in the PlayArea
const Letter = (props) => {
  const letter = props.value.toUpperCase();

  //TEMPORARY for styling purposes
  const status = statuses[Math.floor(Math.random() * 3)];
  return (
    <div className={`letter ${status}`}>
      <h1>{letter}</h1>
    </div>
  );
};

//A key for the keyboard
const KeyboardKey = (props) => {
  const key = props.value.toUpperCase();

  //TEMPORARY for styling purposes
  let status = statuses[Math.floor(Math.random() * 4)];
  if(key === 'ENTER' || key === 'DEL') {
    status = 'default';
  }

  const className = (key === 'ENTER' || key === 'DEL') ? "keyboard-key ent-del" : "keyboard-key";
  return (
    <div className={`${className} ${status}`}>
      <h4>{key}</h4>
    </div>
  );
};

//receives an array and generates a Row of its contents
//rowType can be either 'progress', 'word', or 'keyboard'
//    'progress' will generate a row of ProgressIcon components
//    'word' will generate a row of Letter components
//    'keyboard' will generate a row of KeyboardKey components
const Row = (props) => {
  const arr = props.arr;
  const rowNum = props.rowNum;
  const rowType = props.rowType;

  //create a Component for each element of arr
  const row = arr.map((value, index) => {
    if(rowType === 'progress') {
      return <ProgressIcon status={value} key={`progress-${rowNum},${index}`} />;
    } else if(rowType === 'word') {
      return <Letter value={value} key={`word-${rowNum},${index}`} />;
    } else if(rowType === 'keyboard') {
      return <KeyboardKey value={value} key={value} />;
    }
  });

  return (
    <div className={`row ${rowType}`}>
      {row}
    </div>
  );
};

export default Row;