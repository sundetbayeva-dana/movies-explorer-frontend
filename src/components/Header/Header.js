import React from 'react';
import './Header.css';
import iconMan from '../../images/icon-man.svg';
import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

function Header () {  

  return (
    <div className="header">
      <div className="header__content">
        <img src={logo} alt="Логотип" className="header__logo" />
        <nav className="header__nav">
          <NavLink to="/movies" className={(navData) => navData.isActive ? "header__link_active" : "header__link"} >Фильмы</NavLink>
          <NavLink to="/moviesi" className={(navData) => navData.isActive ? "header__link_active" : "header__link"}>Сохраненные фильмы</NavLink>
        </nav>
        <button className="header__button-account" type="button">
          <img src={iconMan} alt="войти в аккаунт"/>
          <p className="header__button-text">Аккаунт</p>
        </button>
      </div>
      
    </div>
  )
}

export default Header;
