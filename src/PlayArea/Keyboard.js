import { statuses } from '../utils';
import '../css/Keyboard.css';

const keys = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['enter','z','x','c','v','b','n','m','del']
];

//displays the interactive keyboard
const Keyboard = (props) => {
  const typeLetter = props.typeLetter;
  const deleteLetter = props.deleteLetter;
  const submitGuess = props.submitGuess;
  const previousGuesses = props.previousGuesses;
  const wordNum = props.wordNum;

  const keyStatuses = {};
  //only interested in previousGuesses for the current word being guessed
  const currentWordPreviousGuesses = previousGuesses.filter(previousGuess => previousGuess.wordNum === wordNum);
  currentWordPreviousGuesses.forEach(previousGuess => {
    [...previousGuess.guess].forEach((letter, index) => {
      keyStatuses[letter] = statuses[previousGuess.status[index]];
    });
  });
 
  const rows = keys.map((keyRow, rowIndex) => {
    return (
      //create a 'keyboard-row' div for each row of keys (3)
      <div className='keyboard-row' key={`keyboard-row-${rowIndex}`}>
        {keyRow.map((key, keyIndex) => {
          //set onClick function for each key
          let onClick = (event) => {
            const letter = event.currentTarget.id;
            typeLetter(letter);
          }
          if(key === 'enter') {
            onClick = submitGuess;
          } else if(key === 'del') {
            onClick = deleteLetter;
          }

          let className = 'keyboard-key';
          //update className to reflect status of each key
          if(keyStatuses.hasOwnProperty(key)) {
            className += ` ${keyStatuses[key]}`;
          }

          return (
            //build a 'keyboard-key' div for each key in the row
            <div
              className={className}
              id={key}
              onClick={onClick}
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
    <section id='keyboard-area'>
      {rows}
    </section>
  );
}

export default Keyboard;