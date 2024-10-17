import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageCircle, Calendar, Star } from 'lucide-react';

const NotificationCenter: React.FC = () => {
  const mockNotifications = [
    { id: 1, type: 'message', content: 'New message from John Doe', time: '5 minutes ago' },
    { id: 2, type: 'booking', content: 'Upcoming session: Web Development', time: '1 hour ago' },
    { id: 3, type: 'review', content: 'You received a new 5-star review!', time: '2 hours ago' },
    { id: 4, type: 'system', content: 'Welcome to TimeBank!', time: '1 day ago' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageCircle className="text-blue-500" />;
      case 'booking':
        return <Calendar className="text-green-500" />;
      case 'review':
        return <Star className="text-yellow-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Notification Center</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {mockNotifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-start p-4 border-b last:border-b-0 hover:bg-gray-50"
          >
            <div className="mr-4">{getIcon(notification.type)}</div>
            <div className="flex-grow">
              <p className="font-semibold">{notification.content}</p>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;