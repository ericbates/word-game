//Renders the active input row
const CurrentGuess = () => {
  return (
    <div id="current-guess">
      <div className="word-row">
        <div className="letter">
          <h1>A</h1>
        </div>
        <div className="letter">
          <h1>B</h1>
        </div>
        <div className="letter empty">
          
        </div>
        <div className="letter empty">
          
        </div>
        <div className="letter empty">
          
        </div>
        <div className="letter empty">
          
        </div>
        <div className="letter empty">
          
        </div>
        <div className="letter empty">
          
        </div>
      </div>
    </div>
  );
}

export default CurrentGuess;