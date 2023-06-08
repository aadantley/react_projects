import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";
import "./index.css";

// Initial React component code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
