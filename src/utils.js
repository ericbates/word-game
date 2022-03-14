//the three possible statuses for progressIcons, previousGuess Letters, and Keyboard Keys
export const statuses = ['absent', 'misplaced', 'correct'];

//assigns a className for word-row based on length of word currently being guessed
export const assignWordRowClassName = (wordNum) => {
  let wordRowClassName = 'word-row';
  switch(wordNum) {
    case 0:
      wordRowClassName += ' first';
      break;
    case 1:
      wordRowClassName += ' second';
      break;
    case 2:
      wordRowClassName += ' third';
      break;
    case 3:
      wordRowClassName += ' fourth';
      break;
    case 4:
      wordRowClassName += ' fifth';
      break;
    case 5:
      wordRowClassName += ' sixth';
      break;
    default: 
      break;
  }

  return wordRowClassName;
};