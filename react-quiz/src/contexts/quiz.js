import { createContext, useReducer } from "react";
import { shuffleAnswers, normalizeQuestions } from "../helpers/helpers";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
  showResults: false,
  currentAnswer: "",
  answers: [],
  correctAnswerCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex // if true
        : state.currentQuestionIndex + 1; // if false

      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResults, // this was the problem line; I updated state but wasn't returning it with the context
        answers,
        currentAnswer: "", // adding the answers for each question to state
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "LOADED_QUESTIONS": {
      console.log("LOADED_QUESTIONS", state, action);
      const normalizedQuestions = normalizeQuestions(action.payload);
      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount: correctAnswerCount,
      };
    }
    default: {
      return state;
    }
  }
};

// Old code -- using if statements instead of switch statement

// if (action.type === "NEXT_QUESTION") {
//   const showResults =
//     state.currentQuestionIndex === state.questions.length - 1;

//   const currentQuestionIndex = showResults
//     ? state.currentQuestionIndex // if true
//     : state.currentQuestionIndex + 1; // if false

//   const answers = showResults
//     ? []
//     : shuffleAnswers(state.questions[currentQuestionIndex]);

//   return {
//     ...state,
//     currentQuestionIndex,
//     showResults, // this was the problem line; I updated state but wasn't returning it with the context
//     answers, // adding the answers for each question to state
//   };
// }
// if (action.type === "RESTART") {
//   return initialState;
// }
// return state;

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // enables you to access your state globally
  const value = useReducer(reducer, initialState);
  console.log("state", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
