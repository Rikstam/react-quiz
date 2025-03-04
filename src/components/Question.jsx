import { useState } from "react";

import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";
import QUESTIONS from "../questions.js";

export const Question = ({ index, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }
  return (
    <div id="question">
      <QuestionTimer timeout={5000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>

      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};
