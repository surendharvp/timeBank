import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Messaging: React.FC = () => {
  const [message, setMessage] = useState('');

  const mockConversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, are we still on for tomorrow?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Thanks for the great lesson!' },
    { id: 3, name: 'Mike Johnson', lastMessage: 'Can we reschedule our meeting?' },
  ];

  const mockMessages = [
    { id: 1, sender: 'John Doe', content: 'Hey, are we still on for tomorrow?', timestamp: '10:30 AM' },
    { id: 2, sender: 'You', content: 'Yes, absolutely! Looking forward to it.', timestamp: '10:35 AM' },
    { id: 3, sender: 'John Doe', content: 'Great! See you then.', timestamp: '10:36 AM' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>

      <div className="flex bg-white rounded-lg shadow-md overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
          {mockConversations.map((conversation) => (
            <div key={conversation.id} className="p-4 hover:bg-gray-100 cursor-pointer">
              <h3 className="font-semibold">{conversation.name}</h3>
              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
            </div>
          ))}
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex-grow overflow-y-auto p-4">
            {mockMessages.map((msg) => (
              <div key={msg.id} className={`mb-4 ${msg.sender === 'You' ? 'text-right' : ''}`}>
                <p className="inline-block bg-blue-100 rounded-lg p-2 max-w-xs">
                  {msg.content}
                </p>
                <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white p-2 rounded-r-lg"
                onClick={handleSendMessage}
              >
                <Send />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;