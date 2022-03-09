//Render all found answers
const FoundAnswers = (props) => {
  const answers = props.answers;

  return (
    <div id='found-answers'>
      {answers.map((answer, index) => {
        return <h2 key={`answer-${index}`}>{answer.toUpperCase()}</h2>
      })}
    </div>
  )
}

export default FoundAnswers;