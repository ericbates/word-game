//Render all found answers
const FoundAnswers = (props) => {
  const answers = props.answers;

  return (
    <div id="found-answers">
      {answers.map((answer, index) => {
        return <h4 key={`answer-${index}`}>{answer.toUpperCase()}</h4>
      })}
    </div>
  );
}

export default FoundAnswers;