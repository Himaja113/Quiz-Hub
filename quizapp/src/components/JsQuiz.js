import React, { useState, useEffect } from 'react';
import { JsData } from '../Data/JsData';
import QuizResult from './QuizResult';
import shuffleArray from './shuffleArray'; // Assuming utils folder
import '../styles/quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]); // Array for selections
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(JsData); // Shuffled data

  useEffect(() => {
    if (!showResult) { // Shuffle questions only before showing result
      setShuffledQuestions(shuffleArray(JsData)); // Shuffle on component mount
    }
  }, [showResult]); // Re-run effect on showResult change

  const changeQuestion = (direction) => {
    updateScore();
    if (direction === 'next' && currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptions([]); // Clear selections on next question
    } else if (direction === 'previous' && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (direction === 'submit') {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const { answer } = shuffledQuestions[currentQuestion];

    if (Array.isArray(answer)) { // Check for multiple answer format
      const correctAnswers = selectedOptions.filter((option) => answer.includes(option));
      setScore(score + correctAnswers.length);
    } else if (selectedOptions.includes(answer)) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setScore(0);
    setShuffledQuestions(shuffleArray(JsData)); // Re-shuffle on reset
  };

  const isLastQuestion = currentQuestion === shuffledQuestions.length - 1;

  return (
    <div>
      <p className="heading-txt">JavaScript Quiz</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={shuffledQuestions.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{shuffledQuestions[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {shuffledQuestions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  className={`option-btn ${
                    selectedOptions.includes(i + 1) ? 'checked' : null
                  }`}
                  onClick={() => {
                    const newSelectedOptions = [...selectedOptions]; // Copy array
                    if (selectedOptions.includes(i + 1)) {
                      newSelectedOptions.splice(newSelectedOptions.indexOf(i + 1), 1); // Deselect
                    } else {
                      newSelectedOptions.push(i + 1); // Select
                    }
                    setSelectedOptions(newSelectedOptions);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="button-container">
              <button type="button" value="Previous" id="previous-button" disabled={currentQuestion === 0} onClick={() => changeQuestion('previous')}>
                Previous
              </button>
              {isLastQuestion ? (
                <input type="button" value="Submit" id="submit-button" onClick={() => changeQuestion('submit')} />
              ) : (
                <input type="button" value="Next" id="next-button" onClick={() => changeQuestion('next')} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
