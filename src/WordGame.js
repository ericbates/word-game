import './WordGame.css';
import Stats from './Stats.js';
import PlayArea from './PlayArea.js';
import Keyboard from './Keyboard.js';

function WordGame() {
  return (
    <div>
      <header>
        <h1>Word Game</h1>
      </header>
      <Stats />
      <PlayArea />
      <Keyboard />
    </div>
  );
}

export default WordGame;
