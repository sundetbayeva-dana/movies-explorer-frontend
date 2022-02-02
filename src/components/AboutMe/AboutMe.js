import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import photo from '../../images/001.jpg';

function AboutMe () {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me__content">
        <h2 className="about-me__heading">Студент</h2>
        <div className="about-me__info">
          <img src={photo} alt="фото" className="about-me__photo" /> 
          <div className="about-me__text-info">
            <h3 className ="about-me__name">Дана</h3>
            <p className ="about-me__brief-info">Фронтенд разработчик, 26 лет</p>
            <p className ="about-me__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <Link to="#" className="about-me__link-social">Github</Link> 
          </div>               
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
