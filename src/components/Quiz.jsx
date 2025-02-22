import { use, useState } from "react";
import QUESTIONS from "../questions";
export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectedAnswer = (selectedAnswer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
