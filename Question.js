import React from 'react';

function Question({ question, options, handleSelect, selectedOption }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold">{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-400 text-gray-800'
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;

