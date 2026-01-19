import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AIChatbot from './components/common/AIChatbot';
import Home from './pages/Home';
import Support from './pages/Support';
import Volunteer from './pages/Volunteer';
import VolunteerDashboardPage from './pages/VolunteerDashboard';
import FAQPage from './pages/FAQ';
import AIChatPage from './pages/AIChat';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [volunteerData, setVolunteerData] = useState(null);

  const handleVolunteerLogin = (data) => {
    setVolunteerData(data);
  };

  const handleVolunteerLogout = () => {
    setVolunteerData(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar volunteerData={volunteerData} onLogout={handleVolunteerLogout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/volunteer" element={<Volunteer onLogin={handleVolunteerLogin} />} />
          <Route path="/volunteer-dashboard" element={<VolunteerDashboardPage volunteerData={volunteerData} />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/ai-chat" element={<AIChatPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <AIChatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
