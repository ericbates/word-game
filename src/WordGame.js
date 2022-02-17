import Stats from './Stats';
import PlayArea from './PlayArea';
import Keyboard from './Keyboard';

const WordGame = () => {
  //TEMPORARY DUMMY DATA 
  const totalGuesses = 20;
  let numGuesses = 10;
  const correctGuesses = ['two', 'tear', 'index', 'apples', 'jukebox', 'blizzard', 'mezzanine'];

  return (
    <div className="word-game-app">
      <header>
        <h1>Word Game</h1>
      </header>
      <Stats
        totalGuesses={totalGuesses}
        numGuesses={numGuesses}
        correctGuesses={correctGuesses}
      />
      <PlayArea />
      <Keyboard />
    </div>
  );
}

export default WordGame;
