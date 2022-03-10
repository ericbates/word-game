import statuses from '../statuses';

//Render multiple rows of ProgressIcons
//currentProgress is a 2D array representing rows of statuses
//3 possible statuses:
//    absent (gray)
//    misplaced (yellow)
//    correct (green)
const ProgressIcons = (props) => {
  const previousGuesses = props.previousGuesses;

  const rows = previousGuesses.map((guess, guessIndex) => {
    return (
      //build a 'progress-row' div for each guess
      <div className='progress-row' key={`progress-row-${guessIndex}`}>
        {guess.status.map((iconStatus, iconIndex) => {
          return (
            //build a 'progress-icon' div for each progressIcon in the row
            <div
              className={`progress-icon ${statuses[iconStatus]}`}
              key={`progress-icon-${guessIndex},${iconIndex}`}
            />
          )
        })}
      </div>
    ) 
  })

  return (
    <div id='progress-icons'>
      {rows}
    </div>
  )
} 

export default ProgressIcons;