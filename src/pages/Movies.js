import React from 'react';
import './Home.css';

const Movies = ({ language }) => {
  return (
    <div className="movies-container">
      <div className="movies-text">
        Welcome to the Movies Page - Language: {language}
      </div>
    </div>
  );
};

export default Movies;