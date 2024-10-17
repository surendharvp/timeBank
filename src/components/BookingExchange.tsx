import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const BookingExchange: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const skillId = searchParams.get('skillId');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    // Implement booking logic here
    console.log('Booking confirmed for skill:', skillId, 'on', selectedDate, 'at', selectedTime);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Book Skill Exchange</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Select Date and Time</h2>
        <div className="mb-4">
          <label className="block mb-2">Date:</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Time:</label>
          <input
            type="time"
            className="w-full p-2 border border-gray-300 rounded"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        <div className="flex items-center mb-2">
          <Calendar className="mr-2 text-blue-500" />
          <span>Date: {selectedDate || 'Not selected'}</span>
        </div>
        <div className="flex items-center mb-4">
          <Clock className="mr-2 text-green-500" />
          <span>Time: {selectedTime || 'Not selected'}</span>
        </div>
        <p className="text-gray-700">Time Bank Balance: 24 hours</p>
        <p className="text-gray-700">Cost: 2 hours</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center"
        onClick={handleBooking}
      >
        <CheckCircle className="mr-2" />
        Confirm Booking
      </motion.button>
    </div>
  );
};

export default BookingExchange;