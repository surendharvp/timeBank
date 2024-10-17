import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

const FeedbackSupport: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState('feedback');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { type: feedbackType, message });
    // Implement submission logic here
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Feedback & Support</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block mb-2">Type:</label>
          <div className="flex">
            <button
              className={`flex-1 py-2 px-4 rounded-l ${feedbackType === 'feedback' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setFeedbackType('feedback')}
            >
              Feedback
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-r ${feedbackType === 'support' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setFeedbackType('support')}
            >
              Support
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">Your Message:</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded h-32 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center"
          >
            <Send className="mr-2" />
            Submit
          </motion.button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Need immediate assistance?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center"
          >
            <MessageCircle className="mr-2" />
            Start Live Chat
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSupport;