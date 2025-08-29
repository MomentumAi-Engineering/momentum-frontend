import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

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
import TabSwitching from './components/TabSwitching.jsx';
// import Pricing from './pages/Pricing.jsx';
import Snapfix from './pages/Snapfix.jsx';
import Blogs from './pages/Blogs.jsx';

import AuthCallback from './pages/auth/AuthCallback.jsx';
import GraphSection from './components/BottomContext.jsx';
import Ending from './components/Ending.jsx';

import { Toaster } from "react-hot-toast";
import ForgotPassword from './pages/auth/ForgotPassword.jsx'

const AppWrapper = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/snapfix';

  return (
    <div className="h-screen">
      {!hideNavbar && <Navbar />}


      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <AboutSecond />
              <Moreabout />
              <TabSwitching />
              <GraphSection/>
              <Ending />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Blogs" element={<Blogs/>}/>        
        <Route path="/snapfix" element={<Snapfix />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path = "/auth/callback" element={<AuthCallback />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
