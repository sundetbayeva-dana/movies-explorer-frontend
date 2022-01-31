import React from 'react';
import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

function NavTab () {

  return (
    <nav className="nav-tab">
      <div className="nav-tab__content">
        <HashLink to="#about-project" className="nav-tab__link">О проекте</HashLink>
        <HashLink to="#techs" className="nav-tab__link">Технологии</HashLink>
        <HashLink to="#about-me" className="nav-tab__link">Студент</HashLink>
      </div>
    </nav>
  )
}

export default NavTab;
