import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {
  const [QuizState, dispatch] = useContext(QuizContext);
  const currentQuestion = QuizState.questions[QuizState.currentQuestionIndex];
  console.log("Question", QuizState);
  console.log(currentQuestion);
  return (
    <>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {QuizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={QuizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </>
  );
};

export default Question;
