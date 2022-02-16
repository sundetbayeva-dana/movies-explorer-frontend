import React, {useEffect} from 'react';
import './Profile.css';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../context/CurrentUserContext'
import validator from 'validator';
import { useNavigate  } from 'react-router-dom';

function Profile ({onSubmit, onLogoutClick, onMenuClick, isMenuVisible, onCloseButton, serverResponse}) {

  const currentUser = React.useContext(CurrentUserContext).data;
  const [data, setData] = React.useState({
    name: '',
    email: '',
  })
  const [nameDirty, setNameDirty] = React.useState(false)
  const [emailDirty, setEmailDirty] = React.useState(false)
  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [formValid, setFormValid] = React.useState(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    setData({
      ...data,
      name: `${currentUser.name}`,
      email: `${currentUser.email}`
    })
  }, []);

  useEffect(() => {
    if (emailError || nameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, nameError])

  function handleChange(e) {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
    if (name === 'name') {
      if (!validator.isAlpha(e.target.value, 'ru-RU', {'ignore' : ' -'} ) &&
        !validator.isAlpha(e.target.value, 'en-US', {'ignore' : ' -'} )) {
        setNameError('поле Имя должно содержать только латиницу, кириллицу, пробел или дефис')
        if (!e.target.value) {
          setNameError('поле Имя не может быть пустым')
        }
      }
      else {
        setNameError('')
      }
    } else if (name === 'email') {
      if (!validator.isEmail(e.target.value)) {
        setEmailError('Некорректный email')
        if (!e.target.value) {
          setEmailError('поле Email не может быть пустым')
        }
      } else {
        setEmailError('')
      }
    }    
  }

  function handleEditClick(e) {
    e.preventDefault();
    onSubmit(data)
  }

  const handleblur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'name':
        setNameDirty(true) 
        break
        // no default
    }
  }

  function handleExitButtonClick() {
    navigate('/')
    onLogoutClick()
  }

  return (
    <>
      <Header onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}/>
      <div className="profile">
        <div className="profile__content">
          <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
          <form className="profile__form">
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="profile__name">Имя</label>
              <input className="profile__form-input" id="profile__name" name="name" type="text" 
              value={data.name} onChange={handleChange} placeholder="Заполните поле имя пользователя" 
              minLength={2} maxLength={20} onBlur={e => handleblur(e)} required></input>                           
            </div>
            {(nameError && nameDirty) && <span className="profile__error-text">{nameError}</span>} 
            <div className="profile__input-container">
              <label className="profile__form-label" htmlFor="profile__email">E-mail</label>
              <input className="profile__form-input" id="profile__email" name="email" type="email"
              value={data.email} onChange={handleChange} placeholder="Заполните поле email" 
              onBlur={e => handleblur(e)} required></input>              
            </div>
            {(emailError && emailDirty) && <span className="profile__error-text">{emailError}</span>}
            <p className="profile__text">{serverResponse}</p>
            <button className="profile__button-edit" onClick={handleEditClick} disabled={!formValid}>Редактировать</button>
            <button className="profile__button-exit" onClick={handleExitButtonClick} >Выйти из аккаунта</button>

          </form>
        </div>
      </div>
    </>

  )
}

export default Profile;
