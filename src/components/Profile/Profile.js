import React, {useEffect} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../context/CurrentUserContext'
import mainApi from '../../utils/MainApi';

function Profile ({onSubmit, onLogoutClick}) {

  const currentUser = React.useContext(CurrentUserContext).data;

  const [data, setData] = React.useState({
    name: '',
    email: '',
  })

  useEffect(() => {
    setData({
      ...data,
      name: `${currentUser.name}`,
      email: `${currentUser.email}`
    })
  }, []);

  function handleChange(e) {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleEditClick(e) {
    e.preventDefault();
    onSubmit(data)
  }

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__content">
          <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="profile__name">Имя</label>
              <input className="profile__form-input" id="profile__name" name="name" type="text" value={data.name || ''} onChange={handleChange} placeholder="Заполните поле имя пользователя" minLength={2} maxLength={20} required></input>
            </div>
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="profile__email">E-mail</label>
              <input className="profile__form-input" id="profile__email" name="email" type="email" value={data.email || ''} onChange={handleChange} placeholder="Заполните поле email" required></input>
            </div>
            <button className="profile__button-edit" onClick={handleEditClick}>Редактировать</button>
            <button className="profile__button-exit" onClick={onLogoutClick}>Выйти из аккаунта</button>
            
          </form>
        </div>
        

      </div>
    </>

  )
}

export default Profile;
