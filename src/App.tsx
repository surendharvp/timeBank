import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import SearchExplore from './components/SearchExplore';
import SkillDetail from './components/SkillDetail';
import BookingExchange from './components/BookingExchange';
import Messaging from './components/Messaging';
import ProfileManagement from './components/ProfileManagement';
import TransactionHistory from './components/TransactionHistory';
import NotificationCenter from './components/NotificationCenter';
import FeedbackSupport from './components/FeedbackSupport';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<SearchExplore />} />
            <Route path="/skill/:id" element={<SkillDetail />} />
            <Route path="/booking" element={<BookingExchange />} />
            <Route path="/messages" element={<Messaging />} />
            <Route path="/profile" element={<ProfileManagement />} />
            <Route path="/transactions" element={<TransactionHistory />} />
            <Route path="/notifications" element={<NotificationCenter />} />
            <Route path="/feedback" element={<FeedbackSupport />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;