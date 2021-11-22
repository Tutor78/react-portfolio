import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div className='container'>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'about' && <About />}
      {currentPage === 'portfolio' && <Portfolio />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'resume' && <Resume />}
    </div>
  );
}

export default App;
