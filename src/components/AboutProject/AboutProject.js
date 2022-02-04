import React from 'react';
import './AboutProject.css';


function AboutProject () {
  return (
    <div className="about-project" id="about-project">
      <div className="about-project__content">
        <h2 className="about-project__heading">О проекте</h2>
        <div className="about-project__common-about-container">
          <div className="about-project__about-container">
            <h3 className="about-project__about-heading">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__about-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>        
          </div>
          <div className="about-project__about-container">
            <h3 className="about-project__about-heading">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__about-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>        
        </div>
        <div className="about-project__timing">
          <div className="about-project__term">
            <p className="about-project__first-timing-text">1 неделя</p>
            <p className="about-project__timing-explanation">Back-end</p>
          </div>
          <div className="about-project__term">
            <p className="about-project__second-timing-text">4 недели</p>
            <p className="about-project__timing-explanation">Front-end</p>
          </div>
        </div>
      </div>      
    </div>    
  )
}

export default AboutProject;
