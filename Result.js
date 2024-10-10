import React from 'react';

function Result({ score }) {
  return (
    <div className="text-lg font-bold">
      Quiz Completed!
      <br />
      Your Score: {score}
    </div>
  );
}

export default Result;