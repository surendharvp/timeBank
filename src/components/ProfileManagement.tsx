import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Plus } from 'lucide-react';

const ProfileManagement: React.FC = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [location, setLocation] = useState('New York, NY');
  const [skills, setSkills] = useState(['Web Development', 'Graphic Design']);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleSaveProfile = () => {
    // Implement profile saving logic here
    console.log('Profile saved');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Profile Management</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block mb-2">Name:</label>
          <div className="flex items-center">
            <User className="mr-2 text-gray-400" />
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Email:</label>
          <div className="flex items-center">
            <Mail className="mr-2 text-gray-400" />
            <input
              type="email"
              className="flex-grow p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Phone:</label>
          <div className="flex items-center">
            <Phone className="mr-2 text-gray-400" />
            <input
              type="tel"
              className="flex-grow p-2 border border-gray-300 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Location:</label>
          <div className="flex items-center">
            <MapPin className="mr-2 text-gray-400" />
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Skills:</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l"
              placeholder="Add a new skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-r"
              onClick={handleAddSkill}
            >
              <Plus />
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          onClick={handleSaveProfile}
        >
          Save Profile
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileManagement;