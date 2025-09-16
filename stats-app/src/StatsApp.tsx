import React from 'react';

const StatsApp: React.FC = () => {
  const [level, setLevel] = React.useState<number>(1);
  const [score, setScore] = React.useState<number>(0);

  return (
    <div className="border border-gray-300 p-3 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-3">Stats</h3>
      <div className="space-y-2 mb-4">
        <div className="text-sm">
          <span className="font-medium">Level:</span> {level}
        </div>
        <div className="text-sm">
          <span className="font-medium">Score:</span> {score}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setLevel(level + 1)}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Level Up
        </button>
        <button
          onClick={() => setScore(score + 10)}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Add 10 Points
        </button>
      </div>
    </div>
  );
};

export default StatsApp;


