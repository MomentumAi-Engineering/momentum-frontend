import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import AboutSecond from './components/AboutSecond.jsx';
import Team from './pages/Team.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/auth/Signup.jsx';
import Login from './pages/auth/Login.jsx';
import Moreabout from './components/Moreabout.jsx';

const App = () => {
  return (
    <Router>
      <div className='h-screen'>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <AboutSecond />
                <Moreabout />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
