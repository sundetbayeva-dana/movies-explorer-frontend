import React from 'react';
import './Promo.css';
import { Link, Outlet, Navigate } from 'react-router-dom'; 
import logo from '../../images/logo.svg';
import backgroundImage from '../../images/promo-background.png'
import Navigation from '../Navigation/Navigation';

function Promo ({loggedIn}) {
  console.log(loggedIn)
  const headerNotAuthClassName = (
    `${!loggedIn && 'promo__header_not-auth_visible'}`
  )

  const headerAuthClassName = (
    `${loggedIn && 'promo__header_auth_visible'}`
  )

  return (
    <div className="promo">
      <div className="promo__content">
          <div className="promo__header">
          <img src={logo} alt="Логотип" className="promo__logo" />
            <div className={`promo__header_not-auth ${headerNotAuthClassName}`}>
              <nav className="promo__nav">
                <Link to="/signup" className="promo__link promo__register">Регистрация</Link>
                <Link to="/signin" className="promo__link promo__login">
                  <p className="promo__login-text">
                    Войти
                  </p>
                </Link>
              </nav>
            </div>
            <div className={`promo__header_auth ${headerAuthClassName}`}>
              <Navigation />
            </div>
            
          </div>
          
          <Outlet />

        <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={backgroundImage} alt="Фоновое изображение" className="promo__background-image"/>
      </div>      
    </div>
  )
}

export default Promo;
