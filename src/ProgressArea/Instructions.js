const Instructions = (props) => {
  return (
    <div id="instructions">
      <p><strong>Welcome to Word Game!</strong></p>
      <p>Try to guess as many words as possible in {props.maxGuesses} guesses.</p>
      <p>A <span className='grey'><strong>grey</strong></span> letter indicates that the letter is not present in the word being guessed.</p>
      <p>A <span className='yellow'><strong>yellow</strong></span> letter indicates that the letter is present in the word being guessed but is in the wrong location.</p>
      <p>A <span className='green'><strong>green</strong></span> letter indicates the the letter is present in the word being guessed and is in the correct location.</p>
      <p>Can you guess all 6 words?</p>
    </div>
  );
}

export default Instructions;