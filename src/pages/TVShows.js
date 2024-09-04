import React from 'react';
import './Home.css';

const TVShows = ({ language }) => {
  return (
    <div className="tvshows-container">
      <div className="tvshows-text">
        Welcome to the TVShows Page - Language: {language}
      </div>
    </div>
  );
};

export default TVShows;