import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';



function Header ({onMenuClick, isMenuVisible, onCloseButton}) {  

  return (
    <div className="header">
      <div className="header__content">        
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>
        <Navigation onMenuClick={onMenuClick} isMenuVisible={isMenuVisible}
        onCloseButton={onCloseButton} />
      </div>
      
    </div>
  )
}

export default Header;
