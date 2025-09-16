import React, { Suspense } from 'react';
import RemoteBoundary from './RemoteBoundary';

const Stats = React.lazy(() => import('stats/Stats'));
const Chat = React.lazy(() => import('chat/Chat'));

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <h1>Host App</h1>
      <p>Module Federation host is running.</p>
      <div style={{ display: 'flex', gap: 16 }}>
        <RemoteBoundary fallback={<div style={{ border: '1px dashed #ccc', padding: 12 }}>Stats unavailable</div>}>
          <Suspense fallback={<div>Loading stats...</div>}>
            <Stats />
          </Suspense>
        </RemoteBoundary>
        <RemoteBoundary fallback={<div style={{ border: '1px dashed #ccc', padding: 12 }}>Chat unavailable</div>}>
          <Suspense fallback={<div>Loading chat...</div>}>
            <Chat />
          </Suspense>
        </RemoteBoundary>
      </div>
    </div>
  );
};

export default App;


