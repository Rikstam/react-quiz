import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import { Question } from "./Question";
import { Summary } from "./Summary";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = userAnswers.length === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null);
  }, [handleSelectedAnswer]);

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};
