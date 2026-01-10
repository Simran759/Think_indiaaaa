import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Work from './pages/Work';
import Team from './pages/Team';

// import Youthfest from './pages/Youthfest';
import Auth from './pages/Auth';
import PostLogin from './pages/PostLogin';
import LoginFailed from "./pages/LoginFailed";
import CompleteProfile from "./pages/CompleteProfile";
import Dashboard from "./pages/Dashboard";


import Youthfest2024 from "./pages/youthfest/youthfest2024";
import Youthfestevent from "./pages/youthfest/events";
import './App.css';

// Create a wrapper component to use useLocation hook
function App() {
  const location = useLocation();


  // Disable browser's scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/youthfest" element={<Youthfest />} /> */}
          <Route path="/login" element={<Auth />} />
          <Route path="/login-failed" element={<LoginFailed />} />

          <Route path="/post-login" element={<PostLogin />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/youthfest/2024" element={<Youthfest2024 />} />
            <Route path="/youthfest/event" element={<Youthfestevent />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;