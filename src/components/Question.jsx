import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";
export const Question = ({questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}) => {
  return (
    <div id="question">
      <QuestionTimer
        timeout={5000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>

      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};
