import Stats from './Stats';
import PlayArea from './PlayArea';
import Keyboard from './Keyboard';

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
