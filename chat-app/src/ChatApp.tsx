import React, { useState } from 'react';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input.trim()]);
    setInput('');
  };

  return (
    <div className="border border-gray-300 p-3 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-3">Chat</h3>
      <div className="min-h-20 border border-gray-200 p-2 mb-2 rounded bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className="mb-1 text-sm">{m}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;


