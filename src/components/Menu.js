import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const translations = {
  English: { home: 'Home', movies: 'Movies', tv: 'TV Shows', sports: 'Sports' },
  French: { home: 'Accueil', movies: 'Films', tv: 'Émissions TV', sports: 'Sports' },
  German: { home: 'Startseite', movies: 'Filme', tv: 'TV Shows', sports: 'Sport' },
  Russian: { home: 'Домой', movies: 'Фильмы', tv: 'Телешоу', sports: 'Спорт' },
  Spanish: { home: 'Inicio', movies: 'Películas', tv: 'Series TV', sports: 'Deportes' },
  Chinese: { home: '首页', movies: '电影', tv: '电视节目', sports: '运动' }
};

const Menu = ({ language }) => {
  const menuItems = translations[language];

  return (
    <div className="menu">
      <Link to="/home" className="menu-item">
        <div className="image-container">
          <div className="image-overlay"></div>
          <img src="https://i.ibb.co/5rwLYfk/e502905d-15f4-4d20-8e7c-14c38a8d75f9.jpg" alt={menuItems.home} />
        </div>
        <span>{menuItems.home}</span>
      </Link>
      <Link to="/movies" className="menu-item">
        <div className="image-container">
          <div className="image-overlay"></div>
          <img src="https://i.ibb.co/0jJrcbH/25bf31c9-4002-433f-a981-5b56f6d7e9b2.jpg" alt={menuItems.movies} />
        </div>
        <span>{menuItems.movies}</span>
      </Link>

      <Link to="/tv-shows" className="menu-item">
        <div className="image-container">
          <div className="image-overlay"></div>
          <img src="https://i.ibb.co/X8CxRmM/7127e36d-5194-4865-8646-f66d5c3e66d7.jpg" alt={menuItems.tv} />
        </div>
        <span>{menuItems.tv}</span>
      </Link>

      <Link to="/sports" className="menu-item">
        <div className="image-container">
          <div className="image-overlay"></div>
          <img src="https://i.ibb.co/vPTyTcb/d54fe3ba-db43-4469-b530-531c15e56492.jpg" alt={menuItems.sports} />
        </div>
        <span>{menuItems.sports}</span>
      </Link>
    </div>
  );
};

export default Menu;
