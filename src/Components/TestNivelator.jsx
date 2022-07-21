import React, { useState } from "react";
import "././TestNivelator.css";

export default function TestNivelator() {
  const questions = [
    {
      questionText: "Is this .......... house?",
      answerOptions: [
        { answerText: "Your parent's", isCorrect: false },
        { answerText: "Your parents's", isCorrect: false },
        { answerText: "Your parents'", isCorrect: true },
      ],
    },
    {
      questionText: "You .......... smoke here as you .......... cause a fire.",
      answerOptions: [
        { answerText: "must, may", isCorrect: false },
        { answerText: "mustn't, may", isCorrect: true },
        { answerText: "mustn't, may not", isCorrect: false },
      ],
    },
    {
      questionText: "What colour will you paint the children's bedroom?",
      answerOptions: [
        { answerText: "I hope it was right.", isCorrect: false },
        { answerText: "We can't decide.", isCorrect: true },
        { answerText: "It wasn't very difficult.", isCorrect: false },
      ],
    },
    {
      questionText: "Shall we go to the gym now?",
      answerOptions: [
        { answerText: "I'm too tired.", isCorrect: true },
        { answerText: "It's very good.", isCorrect: false },
        { answerText: "Not at all.", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
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
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
