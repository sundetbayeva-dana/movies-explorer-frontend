import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';


function Main({loggedIn, onMenuClick, isMenuVisible, onCloseButton}) {
  return (
    <div className="Main">
      <Promo loggedIn={loggedIn} onMenuClick={onMenuClick} isMenuVisible={isMenuVisible}
      onCloseButton={onCloseButton}/>
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main; 