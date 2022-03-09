//Renders the active input row
const CurrentGuess = (props) => {
  //TEMPORARY DUMMY DATA
  const guessLength = 5;
  const currentGuess = props.currentGuess;

  return (
    <div id='current-guess'>
      <div className='word-row'>
        <div className='letter'>
          <h1>A</h1>
        </div>
        <div className='letter'>
          <h1>B</h1>
        </div>
        <div className='letter empty'>
          
        </div>
        <div className='letter empty'>
          
        </div>
        <div className='letter empty'>
          
        </div>
        <div className='letter empty'>
          
        </div>
        <div className='letter empty'>
          
        </div>
        <div className='letter empty'>
          
        </div>
      </div>
    </div>
  )
}

export default CurrentGuess;