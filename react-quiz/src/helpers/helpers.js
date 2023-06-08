export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return (
    unshuffledAnswers
      .map((unshuffledAnswers) => ({
        // converts array into objects
        sort: Math.random(),
        value: unshuffledAnswers,
      }))
      // sorting the array of objects by the sort property shuffling the strings
      .sort((a, b) => a.sort - b.sort)
      // returning the shuffled answers
      .map((a) => a.value)
  );
};

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      question: decodeURIComponent(backendQuestion.question),
      incorrectAnswers,
    };
  });
};
