import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import iconMan from '../../images/icon-man.svg';


function Navigation () {
  return (
    <>
      <div className="nav">
        <button className="nav__button-menu"></button>
        <nav className="nav__nav">
          <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"} >Фильмы</NavLink>
          <NavLink to="/saved-movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Сохраненные фильмы</NavLink>        
        </nav>
        <button className="nav__button-account" type="button">
          <img src={iconMan} alt="войти в аккаунт" className="header__icon-account"/>
          <p className="nav__button-text">Аккаунт</p>
        </button>      
        <nav className="nav__menu">        
          <div className="nav__menu-overlay"></div>
          <div className="nav__menu-content">
            <nav className="nav__menu-nav">
              <button className="nav__button-close" type="button"></button>
              <NavLink to="/" className={(navData) => navData.isActive ? "nav__menu-link nav__menu-link_active" : "nav__menu-link"}>Главная</NavLink>
              <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__menu-link nav__menu-link_active" : "nav__menu-link"}>Фильмы</NavLink>
              <NavLink to="/saved-movies"  className={(navData) => navData.isActive ? "nav__menu-link nav__menu-link_active" : "nav__menu-link"}>Сохраненные фильмы</NavLink>
            </nav>
          </div>
        </nav>
      </div>
    </>

  )
}

export default Navigation;
