import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, MessageSquare, User, Clock, Bell } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/dashboard" className="text-2xl font-bold text-blue-500">TimeBank</Link>
          <div className="flex space-x-4">
            <NavLink to="/dashboard" icon={<Home />} text="Dashboard" active={isActive('/dashboard')} />
            <NavLink to="/search" icon={<Search />} text="Explore" active={isActive('/search')} />
            <NavLink to="/messages" icon={<MessageSquare />} text="Messages" active={isActive('/messages')} />
            <NavLink to="/profile" icon={<User />} text="Profile" active={isActive('/profile')} />
            <NavLink to="/transactions" icon={<Clock />} text="Transactions" active={isActive('/transactions')} />
            <NavLink to="/notifications" icon={<Bell />} text="Notifications" active={isActive('/notifications')} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string; active: boolean }> = ({ to, icon, text, active }) => (
  <Link to={to} className={`flex items-center ${active ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navigation;