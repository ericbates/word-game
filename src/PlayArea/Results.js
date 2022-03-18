const Results = ({previousGuesses, foundAnswers, maxGuesses, totalWords}) => {
  const results = [
    <h1 key='results-h1'>Game Over</h1>
  ];
  if(foundAnswers.length === totalWords) {
    //found all the words
    const remainingGuesses = maxGuesses - previousGuesses.length;
    results.push(
      <>
        <h2 key='results-h2'>Well done! You found all of the words!</h2>
        <p key='results-p'>{`${remainingGuesses} guesses to spare. Try to get them all in less guesses tomorrow!`}</p>
      </>
    );
  } else {
    //ran out of geusses
    const numFoundWords = foundAnswers.length;
    results.push(
      <>
        <h2 key='results-h2'>{`You found ${numFoundWords} out of ${totalWords} words!`}</h2>
        <p key='results-p'>{`Try to find all ${totalWords} tomorrow!`}</p>
      </>
    );
  }

  return (
    <div id='results'>
      {results}
    </div>
  );
}

export default Results;