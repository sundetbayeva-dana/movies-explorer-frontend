import React, {useEffect} from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';

function Register ({errorfromServer, onRegister, }) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [nameDirty, setNameDirty] = React.useState(false)
  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passwordDirty, setPasswordDirty] = React.useState(false)
  const [nameError, setNameError] = React.useState('поле Имя не может быть пустым')
  const [emailError, setEmailError] = React.useState('поле Email не может быть пустым')
  const [passwordError, setPasswordError] = React.useState('поле Пароль не может быть пустым')
  const [formValid, setFormValid] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  let navigate = useNavigate()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('loggedIn')) === true) {
      navigate('/', {replace: true})
    }
  })

  useEffect(() => {
    if (emailError || nameError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError, nameError])

  useEffect(() => {
    setErrorMessage(errorfromServer)
  }, [errorfromServer])

  function handleChangeName(e) {
    setName(e.target.value)
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
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
    if (!validator.isEmail(e.target.value)) {
      setEmailError('Некорректный email')
      if (!e.target.value) {
        setEmailError('поле Email не может быть пустым')
      }
    } else {
      setEmailError('')
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
    if (!e.target.value) {
      setPasswordError('поле Пароль не может быть пустым') 
    } else {
      setPasswordError('') 
    }
  }

  const errorTextClassName = (
    `${errorMessage ? 'register__error-text' : ''}`
  );

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(name, email, password)
  }

  const handleblur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      case 'name':
        setNameDirty(true) 
        break
        // no default
    }
  }

  return (
    <div className="register">
      <div className="register__content">
        <Link to="/" className="register__logo-link">
          <img src={logo} alt="Логотип сайта" className="register__logo" />
        </Link>
        
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form onSubmit={handleSubmit}>
          <label className="register__form-label" htmlFor="register__name">Имя</label>
          <input className="register__form-input" id="register__name" type="text" value={name} name='name' onBlur={e => handleblur(e)}
          onChange={handleChangeName} placeholder="Заполните поле имя пользователя" minLength={2} maxLength={20}></input>
          {(nameError && nameDirty) && <span className="register__error-text">{nameError}</span>}
          <label className="register__form-label" htmlFor="register__email">E-mail</label>
          <input className="register__form-input" id="register__email" type="email" value={email} name='email' onBlur={e => handleblur(e)}
           onChange={handleChangeEmail} placeholder="Заполните поле email" required></input>
          {(emailError && emailDirty) && <span className="register__error-text">{emailError}</span>}
          <label className="register__form-label" htmlFor="register__password">Пароль</label> 
          <input className="register__form-input" id="register__password" type="password" value={password} name='password' onBlur={e => handleblur(e)}
           onChange={handleChangePassword} placeholder="Заполните поле пароль" minLength={3} maxLength={30} required></input>
          {(passwordError && passwordDirty) && <span className="register__error-text">{passwordError}</span>}
          <p className={errorTextClassName}>{errorMessage}</p>
          <button className="register__button-register" type="submit" disabled={!formValid}>
          <p className="register__button-text">Зарегистрироваться</p>
          </button>
        </form>
        
        <p className="register__text">Уже зарегистрированы?
          <Link to="/signin" className="register__text-link">Войти</Link>
        </p>        
      </div>
    </div>
  )
}

export default Register;
