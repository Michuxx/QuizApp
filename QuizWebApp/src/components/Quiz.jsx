import React, { useState, useCallback } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Questions from "../assets/questions.js";
import quizCompl from "/quiz-complete.png";

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
    return (
      <div id="summary">
        <img src={quizCompl} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...Questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSkipAnswer}
          key={activeQuestionIndex}
        />
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
