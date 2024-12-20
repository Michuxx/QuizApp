import React, { useState, useCallback } from "react";
import Question from "./Question.jsx";
import Questions from "../assets/questions.js";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        index={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
