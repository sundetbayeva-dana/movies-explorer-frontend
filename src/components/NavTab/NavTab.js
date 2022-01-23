import React from 'react';
import './NavTab.css';
import { HashLink } from 'react-router-hash-link';

function NavTab () {

  return (
    <nav className="nav">
      <div className="nav__content">
        <HashLink to="#about-project" className="nav__link">О проекте</HashLink>
        <HashLink to="#techs" className="nav__link">Технологии</HashLink>
        <HashLink to="#about-me" className="nav__link">Студент</HashLink>
      </div>
    </nav>
  )
}

export default NavTab;
