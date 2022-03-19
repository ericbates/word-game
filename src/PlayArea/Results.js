const Results = ({previousGuesses, foundAnswers, maxGuesses, totalWords}) => {
  const remainingGuesses = maxGuesses - previousGuesses.length;
  const numFoundWords = foundAnswers.length;

  return (
    <div id='results'>
      <h1>Game Over</h1>
      {
        foundAnswers.length === totalWords
        ? <>
            <h2>Well done! You found all of the words!</h2>
            <p>{`${remainingGuesses} guesses to spare. Try to get them all in less guesses tomorrow!`}</p>
          </>
        : <>
            <h2>{`You found ${numFoundWords} out of ${totalWords} words!`}</h2>
            <p>{`Try to find all ${totalWords} tomorrow!`}</p>
          </> 
      }
    </div>
  );
}

export default Results;