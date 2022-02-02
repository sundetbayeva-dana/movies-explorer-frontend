import React, {useEffect} from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile ({currentName, currentEmail}) {

  const [data, setData] = React.useState({
    name: '',
    email: '',
  })

  useEffect(() => {
    setData({
      ...data,
      name: `${currentName}`,
      email: `${currentEmail}`
    })
}, []); 

  function handleChange(e) {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__content">
          <h1 className="profile__heading">Привет, {currentName}!</h1>
          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="profile__name">Имя</label>
              <input className="profile__form-input" id="profile__name" name="name" type="text" value={data.name || ''} onChange={handleChange}></input>
            </div>
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="profile__email">E-mail</label>
              <input className="profile__form-input" id="profile__email" name="email" type="email" value={data.email || ''} onChange={handleChange}></input>
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
