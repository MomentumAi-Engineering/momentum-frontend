import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// Main Components
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import AboutSecond from './components/AboutSecond.jsx';
import Team from './pages/Team.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';
import Moreabout from './components/Moreabout.jsx';
import TabSwitching from './components/TabSwitching.jsx';
import Snapfix from './pages/Snapfix.jsx';
import Blogs from './pages/Blogs.jsx';
import Product from './pages/Product.jsx';
import GraphSection from './components/BottomContext.jsx';
import Ending from './components/Ending.jsx';

// New Advanced Authentication Components
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Authentication Context
import { AuthProvider } from './contexts/AuthContext.jsx';

// Legacy Auth Components (keeping for compatibility)
import LegacySignup from './pages/auth/Signup.jsx';
import LegacyLogin from './pages/auth/Login.jsx';
import AuthCallback from './pages/auth/AuthCallback.jsx';
import ResetPassword from "./pages/auth/ResetPassword";
import NewPassword from "./pages/auth/NewPassword.jsx";
import LegacyForgotPassword from './pages/auth/ForgotPassword.jsx';

import { Toaster } from "react-hot-toast";

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
              {/* <Ending /> */}
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Blogs" element={<Blogs/>}/>        
        <Route path="/snapfix" element={<Snapfix />} />
        
        {/* New Advanced Authentication Routes */}
        <Route 
          path="/login" 
          element={
            <ProtectedRoute requireUnauth={true}>
              <Login />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <ProtectedRoute requireUnauth={true}>
              <Signup />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/forgot-password" 
          element={
            <ProtectedRoute requireUnauth={true}>
              <ForgotPassword />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute requireAuth={true}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Legacy Auth Routes (keeping for compatibility) */}
        <Route path="/legacy-signup" element={<LegacySignup />} />
        <Route path="/signin" element={<LegacyLogin />} />
        <Route path="/legacy-forgot-password" element={<LegacyForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/new-password/:token" element={<NewPassword />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
};

export default App;
