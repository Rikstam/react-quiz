import { useState, useEffect } from "react";

export const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  
  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);
  return <progress id="question-time" value={remainingTime} max={timeout} />;
};
