import React from 'react';
import './Footer.css';

function Footer () {
  return (
    <div className="footer">
      <div className="footer__content">
        <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__container">
        <div className="footer__links">
            <a href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer"
            className="footer__link">Яндекс.Практикум</a>
            <a href="https://github.com/yandex-praktikum" target="_blank" rel="noopener noreferrer"
            className="footer__link">Github</a>
            <a href="https://www.facebook.com/yandex.practicum/" target="_blank" rel="noopener noreferrer"
            className="footer__link">Facebook</a>
          </div>
          <p className="footer__copyright">
            &#169; 2022
          </p>
        </div>
      </div>      
    </div>
  )
}

export default Footer;
