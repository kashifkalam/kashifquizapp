import React from 'react';

function Score({ score, total }) {
  return (
    <div className="text-lg font-bold">
      Score: {score} / {total}
    </div>
  );
}

export default Score;
