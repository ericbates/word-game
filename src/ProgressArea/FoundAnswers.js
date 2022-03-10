//Render all found answers
const FoundAnswers = (props) => {
  const answers = props.answers;

  let style = {};
  if(!answers.length) {
    style = {display: 'none'}
  }

  return (
    <div id='found-answers' style={style}>
      {answers.map((answer, index) => {
        return <h2 key={`answer-${index}`}>{answer.toUpperCase()}</h2>
      })}
    </div>
  )
}

export default FoundAnswers;