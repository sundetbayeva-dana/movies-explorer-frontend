import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div className="not-found">      
      <p className="not-found__status-code">404</p>
      <h1 className="not-found__status-message">Страница не найдена</h1>
      <Link to="#" className="not-found__link-back">Назад</Link>
    </div>
  )
}

export default NotFound;
