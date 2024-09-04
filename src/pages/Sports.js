import React from 'react';
import './Home.css';

const Sports = ({ language }) => {
  return (
    <div className="sports-container">
      <div className="sports-text">
        Welcome to the Sports Page - Language: {language}
      </div>
    </div>
  );
};

export default Sports;