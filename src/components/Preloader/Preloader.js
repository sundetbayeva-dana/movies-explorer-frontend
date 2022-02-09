import React from 'react'
import './Preloader.css'

const Preloader = ({isVisible}) => {

  const preloaderVisibility = (
    `${isVisible ? 'preloader_visible' : 'preloader'}`

  )

  return (
    <div className={preloaderVisibility}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader