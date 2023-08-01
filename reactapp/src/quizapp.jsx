import React, { useState } from 'react';

const Quiz = () => {
  useState([
 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = () => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Move to the next question or show the score if this was the last question
    const nextQuestion = currentQuestion ;
    if (nextQuestion < questions.length()) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(option)}>{option}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;