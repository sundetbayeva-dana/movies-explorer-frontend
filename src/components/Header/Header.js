import React from 'react';
import './Header.css';

import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';


function Header () {  

  return (
    <div className="header">
      <div className="header__content">
        <img src={logo} alt="Логотип" className="header__logo" />
        <Navigation />
      </div>
      
    </div>
  )
}

export default Header;
