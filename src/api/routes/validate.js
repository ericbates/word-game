var express = require('express');
var router = express.Router();

router.get('/:wordNum/:guess', (req, res, next) => {
  const status = [];
  const guess = req.params.guess;
  const wordNum = parseInt(req.params.wordNum);
  let correct = true;
  [...guess].forEach((letter, index) => {
    const statusInt = Math.floor(Math.random() * 3);
    switch(statusInt) {
      case 0:
        status[index] = 'absent';
        break;
      case 1:
        status[index] = 'misplaced';
        break;
      case 2:
        status[index] = 'correct';
        break;
      default:
        break;
    }
    if(statusInt !== 2) {
      correct = false;
    }
  });
  const guessObject = {
    guess,
    status,
    wordNum,
    correct
  };
  res.send(JSON.stringify(guessObject));
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
