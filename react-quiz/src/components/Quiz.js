import Question from "./Question";
// import { useState } from "react"; removed to use reducer instead
import { useContext, useEffect } from "react";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  // Un-needed code

  // local state management for question index with useState
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // local state management for Quiz with reducer
  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("state", state);

  // global state management for Quiz with context
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);

  const apiUrl =
    "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

  useEffect(() => {
    if (quizState.questions.length > 0) {
      return;
    }
    console.log("on initialize");

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
      });
  });

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div>
          <div className="results">
            <div className="congratulations">congratulations</div>
            <div className="results-info"></div>
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswerCount} out of{" "}
              {quizState.questions.length}
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
