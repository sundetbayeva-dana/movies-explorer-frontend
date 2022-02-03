import React from 'react';
import './AboutMe.css';
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
            <p className ="about-me__about">Я живу в Челябинске, закончила высшую школу электроники и компьютерных наук ЮУрГУ. Я люблю слушать музыку, петь и играть на фортепиано. Недавно начала кодить. С 2018 года работала в компании НТЦ "Комплексные системы".</p>
            <a href="https://github.com/sundetbayeva-dana" target="_blank" rel="noopener noreferrer" className="about-me__link-social">Github</a>
          </div>               
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
