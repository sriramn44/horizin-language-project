import React from 'react';
import './Home.css';

const Home = ({ language }) => {
  return (
    <div className="home-container">
      <div className="home-text">
        Welcome to the Home Page - Language: {language}
      </div>
    </div>
  );
};

export default Home;
