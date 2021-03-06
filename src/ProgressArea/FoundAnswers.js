//Render all found answers
const FoundAnswers = ({foundAnswers}) => {
  //if no found answers yet, hide FoundAnswers
  const style = !foundAnswers.length ? {visibility: 'hidden', padding: '0px', margin: '0px'} : {};

  return (
    <div id='found-answers' style={style}>
      {foundAnswers.map((answer, index) => {
        return <h2 key={`answer-${index}`}>{answer.guess.toUpperCase()}</h2>
      })}
    </div>
  );
}

export default FoundAnswers;