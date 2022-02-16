import React, {useEffect} from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import validator from 'validator';

function Login ({errorfromServer, onSubmit}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [emailDirty, setEmailDirty] = React.useState(false)
  const [passwordDirty, setPasswordDirty] = React.useState(false)
  const [emailError, setEmailError] = React.useState('Поле email не может быть пустым')
  const [passwordError, setPasswordError] = React.useState('поле пароль не может быть пустым')
  const [formValid, setFormValid] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false) 
    } else {
      setFormValid(true) 
    }
  }, [emailError, passwordError])

  useEffect(() => {
    setErrorMessage(errorfromServer)
  }, [errorfromServer])

  function handleChangeEmail(e) {
    setEmail(e.target.value)
    if (!validator.isEmail(e.target.value)) {
      setEmailError('Некорректный email')
      if (!e.target.value) {
        setEmailError('Поле email не может быть пустым')
      }
    } else {
      setEmailError('')
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
    if (!e.target.value) {
      setPasswordError('поле пароль не может быть пустым')
    } else {
      setPasswordError('')
    }
  }

  const errorTextClassName = (
    `${errorMessage ? 'login__error-text' : ''}`
  );

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(email, password)
  }

  function handleblur(e) {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
        // no default
    }
  }

  return (
    <div className="login">
      <div className="login__content">
        <Link to="/" className="login__logo-link">
          <img src={logo} alt="Логотип сайта" className="login__logo" />
        </Link>        
        <h1 className="login__heading">Рады видеть!</h1>
        <form onSubmit={handleSubmit}>
          <label className="login__form-label" htmlFor="login__email">E-mail</label>
          <input className="login__form-input" id="login__email" type="email" value={email} onBlur={handleblur}
          onChange={handleChangeEmail} placeholder="Заполните поле email" name="email" required></input>
          {(emailDirty && emailError) && <span className="login__error-text">{emailError}</span>}
          <label className="login__form-label" htmlFor="login__password" >Пароль</label>
          <input className="login__form-input" id="login__password" type="password" value={password} onBlur={handleblur}
          onChange={handleChangePassword} placeholder="Заполните поле пароль"  name="password" minLength={3} maxLength={30} required></input>
          {(passwordDirty && passwordError) && <span className="login__error-text">{passwordError}</span>}
          <p className={errorTextClassName}>{errorMessage}</p>
          <button className="login__button-login" type="submit" disabled={!formValid}>
          <p className="login__button-text">Войти</p>
          </button>
        </form>
        
        <p className="login__text">Еще не зарегистрированы?
          <Link to="/signup" className="login__text-link">Регистрация</Link>
        </p>
        
      </div>
      

          
    </div>
  )
}

export default Login;
