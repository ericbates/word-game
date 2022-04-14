//Render multiple rows of ProgressIcons
const ProgressIcons = ({previousGuesses, bottomOfProgressIconsRef}) => {
  const rows = previousGuesses.map((guess, guessIndex) => {
    return (
      //build a 'progress-row' div for each guess
      <div className='progress-row' key={`progress-row-${guessIndex}`}>
        {guess.status.map((iconStatus, iconIndex) => {
          return (
            //build a 'progress-icon' div for each progressIcon in the row
            <div
              className={`progress-icon ${iconStatus}`}
              key={`progress-icon-${guessIndex},${iconIndex}`}
            />
          );
        })}
      </div>
    ); 
  });

  return (
    <div id='progress-icons'>
      <div id='progress-icons-overflow-scroll'>
        {rows}
        <div ref={bottomOfProgressIconsRef} />
      </div>
    </div>
  );
} 

export default ProgressIcons;