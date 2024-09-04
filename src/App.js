import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Sports from './pages/Sports';

const App = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <div>
        <Settings language={language} onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Menu language={language} />} />
          <Route path="/home" element={<Home language={language} />} />
          <Route path="/movies" element={<Movies language={language} />} />
          <Route path="/tv-shows" element={<TVShows language={language} />} />
          <Route path="/sports" element={<Sports language={language} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
