import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';


import Collections from './components/pages/Collections';




function App() {
  return (
    <Router> {/* Wrap your Routes inside Router */}
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Collections />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
