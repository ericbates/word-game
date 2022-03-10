import './Keyboard.css';
const statuses = ['absent', 'misplaced', 'correct', 'default'];

//displays the interactive keyboard
const Keyboard = (props) => {
  const keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['enter','z','x','c','v','b','n','m','del']
  ];

  const rows = keys.map((keyRow, rowIndex) => {
    return (
      //create a 'keyboard-row' div for each row of keys (3)
      <div className='keyboard-row' key={`keyboard-row-${rowIndex}`}>
        {keyRow.map((key, keyIndex) => {
          key = key.toUpperCase();
          //TEMPORARY for styling purposes
          let status = statuses[Math.floor(Math.random() * 4)];
          if(key === 'ENTER' || key === 'DEL') {
            status = 'default';
          }

          //set className and onClick function for each key
          let className = 'keyboard-key';
          let onClick = (event) => {
            const letter = event.currentTarget.getElementsByTagName('h3')[0].innerHTML;
            props.typeLetter(letter);
          }
          if(key === 'ENTER') {
            className += ' ent';
            onClick = props.submitGuess;
          } else if(key === 'DEL') {
            className += ' del';
            onClick = props.deleteLetter;
          }

          return (
            //build a 'keyboard-key' div for each key in the row
            <div
              className={`${className} ${status}`}
              onClick={onClick}
              key={`keyboard-key-${rowIndex},${keyIndex}`}
            >
              <h3>{key.toUpperCase()}</h3>
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <section id='keyboard-area'>
      {rows}
    </section>
  )
}

export default Keyboard;