import React from 'react';
import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';
import iconMan from '../../images/icon-man.svg';

function Navigation ({onMenuClick, isMenuVisible, onCloseButton}) {

  const menuVisibled = `${(isMenuVisible) ? 'nav_size_768_visible' : ''}`;

  return (
    <>
      <div className="nav_size_1280">
        <nav className="nav__nav">
          <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"} >Фильмы</NavLink>
          <NavLink to="/saved-movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Сохраненные фильмы</NavLink>
        </nav>
        {/* <button className="nav__button-account" type="button">
          <img src={iconMan} alt="войти в аккаунт" />
          <p className="nav__button-text">Аккаунт</p>
        </button> */}
        <Link to="/profile" className="nav__button-account" >
          <img src={iconMan} alt="войти в аккаунт" />
          <p className="nav__button-text">Аккаунт</p>
        </Link>
      </div>
      <button className="nav__button-menu" type="button" onClick={onMenuClick} ></button>
      <div className={`nav_size_768 ${menuVisibled}`}>
        
        <div className="nav__menu-overlay"></div>
        <div className="nav__menu-content">
        <button className="nav__button-close" type="button" onClick={onCloseButton}></button>        
          <nav className="nav__nav">
                 
            <NavLink to="/"  className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Главная</NavLink> 
            <NavLink to="/movies" onClick={onCloseButton} className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Фильмы</NavLink>
            <NavLink to="/saved-movies" onClick={onCloseButton} className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Сохраненные фильмы</NavLink>
          </nav>
          <button className="nav__button-account" type="button">
            <img src={iconMan} alt="войти в аккаунт" />
            <p className="nav__button-text">Аккаунт</p>
          </button>

        </div>
      
      </div>
    </>
  )
}

export default Navigation;
