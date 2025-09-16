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
    <div style={{ border: '1px solid #ccc', padding: 12 }}>
      <h3>Chat</h3>
      <div style={{ minHeight: 80, border: '1px solid #eee', padding: 8, marginBottom: 8 }}>
        {messages.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
      <button onClick={sendMessage} style={{ marginLeft: 8 }}>Send</button>
    </div>
  );
};

export default ChatApp;


