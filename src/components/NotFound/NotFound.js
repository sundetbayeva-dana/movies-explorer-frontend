import React from 'react';
import './NotFound.css';
import { useNavigate  } from 'react-router-dom';

function NotFound () {
  const navigate = useNavigate();
  return (
    <div className="not-found">      
      <p className="not-found__status-code">404</p>
      <h1 className="not-found__status-message">Страница не найдена</h1>
      <p className="not-found__link-back" onClick={() => navigate(-1)}>Назад</p>
    </div>
  )
}

export default NotFound;
