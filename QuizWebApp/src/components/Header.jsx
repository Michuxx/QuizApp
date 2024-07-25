import quizLogo from "/quiz-logo.png";
import React from "react";

const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="logo-quiz" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
