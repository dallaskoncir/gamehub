import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
}


