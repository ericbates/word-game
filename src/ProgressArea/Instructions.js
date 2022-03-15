const Instructions = (props) => {
  const maxGuesses = props.maxGuesses;
  const totalWords = props.totalWords;
  const title = props.title;

  return (
    <div id="instructions">
      <p><strong>Welcome to {title}!</strong></p>
      <p>Try to guess as many words as possible in {maxGuesses} guesses.</p>
      <p>A <span className='grey'><strong>grey</strong></span> letter indicates that the letter is not present in the word being guessed.</p>
      <p>A <span className='yellow'><strong>yellow</strong></span> letter indicates that the letter is present in the word being guessed but is in the wrong position.</p>
      <p>A <span className='green'><strong>green</strong></span> letter indicates the the letter is present in the word being guessed and is in the correct position.</p>
      <p><strong>Can you guess all {totalWords} words?</strong></p>
    </div>
  );
}

export default Instructions;