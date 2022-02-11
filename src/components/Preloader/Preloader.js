import React from 'react'
import './Preloader.css'

const Preloader = ({isVisible, errorMessage}) => {
  console.log(errorMessage)


  const preloaderVisibility = (
    `${isVisible ? ' preloader preloader_visible' : 'preloader'}`
  )

  const errorMessageClassName = (
    `${errorMessage ? 'error-message_visible' : 'error-message_invisible'}`
  )

  return (
    <>
    <div className={preloaderVisibility}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
    <p className={errorMessageClassName}>
    Во время запроса произошла ошибка.
    Возможно, проблема с соединением или сервер недоступен. Подождите&nbsp;немного и попробуйте ещё раз
    </p>
    </>
    
  )
};

export default Preloader