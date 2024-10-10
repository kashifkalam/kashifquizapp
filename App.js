import React, { useState } from 'react';
import Question from './Components/Question';
import Score from './Components/Score';
import Result from './Components/Result';
import quizData from './Components/quizData';

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleSelect = (option) => {
    setSelectedOption(option);
    checkAnswer(option);
  };

  const checkAnswer = (option) => {
    if (option === quizData[currentIndex].answer) {
      updateScore();
    }
  };

  const updateScore = () => {
    setScore(score + 1);
  };

  const nextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setSelectedOption(null);
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen">
      {currentIndex < quizData.length ? (
        <Question
          question={quizData[currentIndex].question}
          options={quizData[currentIndex].options}
          handleSelect={handleSelect}
          selectedOption={selectedOption}
        />
      ) : (
        <Result score={score} />
      )}
      <Score score={score} total={quizData.length} />
      {currentIndex < quizData.length && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default QuizApp;