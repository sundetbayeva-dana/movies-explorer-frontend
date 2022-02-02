import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import iconMan from '../../images/icon-man.svg';


function Navigation () {
  return (
    <>
      <div className="nav_size_1280">
        <nav className="nav__nav">
          <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"} >Фильмы</NavLink>
          <NavLink to="/saved-movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Сохраненные фильмы</NavLink>
        </nav>
        <button className="nav__button-account" type="button">
          <img src={iconMan} alt="войти в аккаунт" />
          <p className="nav__button-text">Аккаунт</p>
        </button>
      </div>
      <button className="nav__button-menu"></button>
      <div className="nav_size_768">
        
        <div className="nav__menu-overlay"></div>
        <div className="nav__menu-content">
        <button className="nav__button-close" type="button"></button>        
          <nav className="nav__nav">
                 
            <NavLink to="/" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Главная</NavLink> 
            <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Фильмы</NavLink>
            <NavLink to="/saved-movies"  className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Сохраненные фильмы</NavLink>
          </nav>

        </div>
      
      </div>
    </>
  )
}

export default Navigation;

{/* <nav className="nav__nav">
  <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"} >Фильмы</NavLink>
  <NavLink to="/saved-movies" className={(navData) => navData.isActive ? "nav__link nav__link_active" : "nav__link"}>Сохраненные фильмы</NavLink>        
</nav>
<button className="nav__button-account" type="button">
  <img src={iconMan} alt="войти в аккаунт" className="nav__icon-account"/>
  <p className="nav__button-text">Аккаунт</p>
</button>

<button className="nav__button-menu"></button>
<div className="nav__menu">
  <div className="nav__menu-overlay"></div>
  <div className="nav__menu-content">
    <nav className="nav__menu-nav">
      <button className="nav__button-close" type="button"></button>
      <NavLink to="/" className={(navData) => navData.isActive ? "nav__menu-link nav__menu-link_active" : "nav__menu-link"}>Главная</NavLink>
      <NavLink to="/movies" className={(navData) => navData.isActive ? "nav__menu-link nav__menu-link_active" : "nav__menu-link"}>Фильмы</NavLink>
      <NavLink to="/saved-movies"  className={(navData) => navData.isActive ? "nav__menu-link nav__menu-link_active" : "nav__menu-link"}>Сохраненные фильмы</NavLink>
    </nav>
    <button className="nav__button-account" type="button">
      <img src={iconMan} alt="войти в аккаунт" className="nav__icon-account"/>
      <p className="nav__button-text">Аккаунт</p>
    </button>
  </div>
</div>           */}
