import React from 'react';

const StatsApp: React.FC = () => {
  const [level, setLevel] = React.useState<number>(1);
  const [score, setScore] = React.useState<number>(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: 12 }}>
      <h3>Stats</h3>
      <div>Level: {level}</div>
      <div>Score: {score}</div>
      <button onClick={() => setLevel(level + 1)} style={{ marginRight: 8 }}>Level Up</button>
      <button onClick={() => setScore(score + 10)}>Add 10 Points</button>
    </div>
  );
};

export default StatsApp;


