import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile ({name, email}) {

  const [nameValue, setNameValue] = React.useState(`${name}`)
  const [emailValue, setEmailValue] = React.useState(`${email}`)

  function handleChangeName(e) {
    setNameValue(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmailValue(e.target.value)
  }

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__content">

          <h1 className="profile__heading">Привет, {name}!</h1>
          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="name">Имя</label>
              <input className="profile__form-input" id="name" type="text" value={nameValue} onChange={handleChangeName}></input>
            </div>
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="email">E-mail</label>
              <input className="profile__form-input" id="email" type="email"  value={emailValue} onChange={handleChangeEmail}></input>
            </div>
            <button className="profile__button-edit">Редактировать</button>
            <button className="profile__button-exit">Выйти из аккаунта</button>
            
          </form>
        </div>
        

      </div>
    </>

  )
}

export default Profile;
