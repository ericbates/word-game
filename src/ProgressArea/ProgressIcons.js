//Render multiple rows of ProgressIcons
//currentProgress is a 2D array representing rows of statuses
//3 possible statuses:
//    absent (gray)
//    misplaced (yellow)
//    correct (green)
const ProgressIcons = (props) => {
  const currentProgress = props.currentProgress;

  const rows = currentProgress.map((row, rowIndex) => {
    return (
      //build a 'progress-row' div for each row
      <div className='progress-row' key={`progress-row-${rowIndex}`}>
        {row.map((iconStatus, iconIndex) => {
          return (
            //build a 'progress-icon' div for each progressIcon in the row
            <div
              className={`progress-icon ${iconStatus}`}
              key={`progress-icon-${rowIndex},${iconIndex}`}
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