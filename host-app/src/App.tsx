import React, { Suspense } from 'react';
import RemoteBoundary from './RemoteBoundary';

const Stats = React.lazy(() => import('stats/Stats'));
const Chat = React.lazy(() => import('chat/Chat'));

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-bold mb-2">GameHub</h1>
        <p className="text-gray-600 mb-4">Module Federation host is running.</p>
        <div className="flex gap-6 lg:gap-8 flex-col lg:flex-row">
          <div className="flex-1">
            <RemoteBoundary fallback={<div className="border border-dashed border-gray-300 p-3 rounded">Stats unavailable</div>}>
              <Suspense fallback={<div className="text-gray-500">Loading stats...</div>}>
                <Stats />
              </Suspense>
            </RemoteBoundary>
          </div>
          <div className="flex-1">
            <RemoteBoundary fallback={<div className="border border-dashed border-gray-300 p-3 rounded">Chat unavailable</div>}>
              <Suspense fallback={<div className="text-gray-500">Loading chat...</div>}>
                <Chat />
              </Suspense>
            </RemoteBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


