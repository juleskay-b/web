import './App.css';
import React, { useState } from 'react';

import Navbar from './components/header/Navbar';
import Home from './pages/home/home';
import Projects from './pages/projects/projects'
import Art from './pages/art/art'
import Blog from './pages/blog/blog';
import AboutMe from './pages/about-me/about-me';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'projects') {
      return <Projects />;
    } else if (currentPage === 'art') {
      return <Art />;
    } else if (currentPage === 'blog') {
      return <Blog />;
    } else if (currentPage === 'about-me') {
      return <AboutMe />;
    }
    return null;
  }

  return (
    <div className="App">
      <header>
        <Navbar setCurrentPage={setCurrentPage}></Navbar>
      </header>
      <div>
      {renderPage()}
    </div>
    </div>
  );
}

export default App;
