var express = require('express');
var util = require('util');
var router = express.Router();
const sqlite3 = require('sqlite3');

//TEMPORARY VARIABLE FOR TESTING
const todaysWords = ['was', 'four', 'index', 'prison', 'behoove', 'blizzard']

const db = new sqlite3.Database('./database/words.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log('DB connection successful');
});

//promisify db.all
const dbQueryAllRows = util.promisify(db.all.bind(db));

//function for validating if a submitted word exists in the word list
//returns true if valid, else false
const validWord = async (word) => {
  try {
    const sql = `SELECT * FROM words_${word.length} WHERE word=?`;
    const rows = await dbQueryAllRows(sql, [word]);
    return rows.length > 0;
  } catch(e) {
    console.error(e);
  }
}

//builds responseObject to be sent back to front end
//compares each letter of guess against current word being guessed
const generateResponse = (guess, wordNum) => {
  const wordToGuess = todaysWords[wordNum];
  const status = [];
  [...guess].forEach((letter, index) => {
      if(letter === wordToGuess[index]) {
        status[index] = 'correct';
      } else if(wordToGuess.includes(letter)) {
        status[index] = 'misplaced';
      } else {
        status[index] = 'absent';
      }
  });
  const correct = status.every(status => {return status === 'correct'});
  return {
    guess,
    status,
    wordNum,
    correct
  };
}

router.get('/:guess/:wordNum', async (req, res, next) => {
  const guess = req.params.guess;
  const wordNum = parseInt(req.params.wordNum);
  
  const valid = await validWord(guess);

  if(valid) {
    const guessObject = generateResponse(guess, wordNum);
    res.status(200).send(JSON.stringify(guessObject));
  } else {

  }
});

router.get('/correct/:wordNum/:guess/:wordLength', (req, res, next) => {
  const status = [];
  const guess = req.params.guess;
  const wordNum = parseInt(req.params.wordNum);
  const wordLength = parseInt(req.params.wordLength);
  for(let i = 0; i < wordLength; i++) {
    status[i] = 'correct';
  }
  const previousGuess = {
    guess: guess,
    status: status,
    wordNum: wordNum,
    correct: true
  };
  res.send(JSON.stringify(previousGuess));
});

module.exports = router;
