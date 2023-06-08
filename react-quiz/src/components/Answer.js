const Answer = ({
  answerText,
  onSelectAnswer,
  index,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;

  const CorrectAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const WrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const DisabledAnswerClass = currentAnswer ? "disabled-answer" : "";

  return (
    <div
      className={`answer ${CorrectAnswerClass} ${WrongAnswerClass} ${DisabledAnswerClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
