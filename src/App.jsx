import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Collections from './components/pages/Collections';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import About from './components/pages/About';
import Contact from './components/pages/Contact';




function App() {
  return (
    <Router> {/* Wrap your Routes inside Router */}
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Collections />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/men' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
