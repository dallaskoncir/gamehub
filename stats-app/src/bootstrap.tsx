import React from 'react';
import { createRoot } from 'react-dom/client';
import StatsApp from './StatsApp';
import './index.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-3xl p-6">
        <StatsApp />
      </div>
    </div>
  );
}


