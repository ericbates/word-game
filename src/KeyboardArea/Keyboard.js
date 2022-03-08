const statuses = ['absent', 'misplaced', 'correct', 'default'];

//displays the interactive keyboard
const Keyboard = (props) => {
  const keys = props.keys;
  const rows = keys.map((keyRow, rowIndex) => {
    return (
      //create a 'keyboard-row' div for each row of keys (3)
      <div className="keyboard-row" key={`keyboard-row-${rowIndex}`}>
        {keyRow.map((key, keyIndex) => {
          key = key.toUpperCase();
          //TEMPORARY for styling purposes
          let status = statuses[Math.floor(Math.random() * 4)];
          if(key === 'ENTER' || key === 'DEL') {
            status = 'default';
          }

          let className = "keyboard-key";
          if(key === 'ENTER') {
            className += ' ent';
          } else if(key === 'DEL') {
            className += ' del';
          }
          
          return (
            //build a 'keyboard-key' div for each key in the row
            <div
              className={`${className} ${status}`}
              key={`keyboard-key-${rowIndex},${keyIndex}`}
            >
              <h3>{key.toUpperCase()}</h3>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <section id="keyboard-area">
      {rows}
    </section>
  );
}

export default Keyboard;