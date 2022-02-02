import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 


function Footer () {
  return (
    <div className="footer">
      <div className="footer__content">
        <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__container">
          <p className="footer__copyright">
            &#169; 2022
          </p>
          <div className="footer__links">
            <Link to="#" className="footer__link">Яндекс.Практикум</Link>
            <Link to="#" className="footer__link">Github</Link>
            <Link to="#" className="footer__link">Facebook</Link>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Footer;
