import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchExplore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const mockSkills = [
    { id: 1, title: 'Web Development', rating: 4.5, provider: 'John Doe' },
    { id: 2, title: 'Graphic Design', rating: 4.2, provider: 'Jane Smith' },
    { id: 3, title: 'Language Tutoring', rating: 4.8, provider: 'Mike Johnson' },
    { id: 4, title: 'Cooking Lessons', rating: 4.0, provider: 'Emily Brown' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Search & Explore Skills</h1>

      <div className="flex mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search skills..."
            className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>
        <button
          className="ml-4 bg-blue-500 text-white p-3 rounded-lg flex items-center"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter className="mr-2" />
          Filters
        </button>
      </div>

      {filterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white p-4 rounded-lg shadow-md mb-6"
        >
          {/* Add filter options here */}
          <p>Filter options (to be implemented)</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSkills.map((skill) => (
          <Link key={skill.id} to={`/skill/${skill.id}`}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-2">Offered by: {skill.provider}</p>
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-1" />
                <span>{skill.rating.toFixed(1)}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchExplore;