import {useRef} from "react";

export const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={index} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
