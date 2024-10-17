import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Book, Bell } from 'lucide-react';
import Navigation from './Navigation';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome, User!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Clock className="text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold">Time Bank Balance</h2>
            </div>
            <p className="text-3xl font-bold text-blue-600">24 hours</p>
            <p className="text-sm text-gray-600 mt-2">Available to spend</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Book className="text-green-500 mr-2" />
              <h2 className="text-xl font-semibold">Upcoming Bookings</h2>
            </div>
            <p className="text-3xl font-bold text-green-600">3</p>
            <p className="text-sm text-gray-600 mt-2">Scheduled this week</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Bell className="text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <p className="text-3xl font-bold text-yellow-600">5</p>
            <p className="text-sm text-gray-600 mt-2">New messages</p>
          </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Your Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard title="Web Development" rating={4.5} />
            <SkillCard title="Graphic Design" rating={4.0} />
            <SkillCard title="Language Tutoring" rating={4.8} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ title: string; rating: number }> = ({ title, rating }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-4 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center">
        <Star className="text-yellow-500 mr-1" />
        <span>{rating.toFixed(1)}</span>
      </div>
    </motion.div>
  );
};

export default Dashboard;