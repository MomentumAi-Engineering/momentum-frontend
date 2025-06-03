import React from 'react'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import AboutSecond from './components/AboutSecond.jsx'

const App = () => {
  return (
    <div className='h-screen'>
      <div className='mt-3'>
      <Navbar />
      </div>
      <Home />
      <About />
      <AboutSecond />
    </div>
    
  )
}

export default App
