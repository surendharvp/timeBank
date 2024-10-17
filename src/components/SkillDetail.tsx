import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Calendar } from 'lucide-react';

const SkillDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data (replace with actual data fetching)
  const skill = {
    id,
    title: 'Web Development',
    provider: 'John Doe',
    rating: 4.5,
    description: 'Learn web development from an experienced professional. Covers HTML, CSS, JavaScript, and modern frameworks.',
    duration: 2,
    availability: ['Mon', 'Wed', 'Fri'],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">{skill.title}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl">Offered by: {skill.provider}</p>
          <div className="flex items-center">
            <Star className="text-yellow-500 mr-1" />
            <span>{skill.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{skill.description}</p>
        <div className="flex items-center mb-2">
          <Clock className="mr-2 text-blue-500" />
          <span>Duration: {skill.duration} hours</span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-2 text-green-500" />
          <span>Available on: {skill.availability.join(', ')}</span>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={`/booking?skillId=${id}`}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block font-semibold hover:bg-blue-600 transition duration-300"
        >
          Book This Skill
        </Link>
      </motion.div>
    </div>
  );
};

export default SkillDetail;