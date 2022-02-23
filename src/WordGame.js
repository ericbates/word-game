import ProgressArea from './ProgressArea/ProgressArea';
import PlayArea from './PlayArea/PlayArea';
import KeyboardArea from './KeyboardArea/KeyboardArea';
import "./css/WordGame.css";
import './css/StatusColors.css';

const WordGame = () => {
  //TEMPORARY DUMMY DATA 
  const totalGuesses = 20;
  let numGuesses = 10;
  const foundAnswers = ['two', 'tear', 'index', 'apples', 'jukebox', 'aaaaaaaa'];

  return (
    <div className="word-game-app">
      <header>
        <h1>Word Game</h1>
      </header>
      <main>
        <div id="progress-play-container">
          <ProgressArea
            foundAnswers={foundAnswers}
            numGuesses={numGuesses}
            totalGuesses={totalGuesses}
          />
          <PlayArea />
        </div>
        <KeyboardArea />
      </main>
    </div>
  );
}

export default WordGame;
