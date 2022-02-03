import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register ({errorMessage}) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  const errorTextClassName = (
    `${errorMessage ? 'register__error-text' : ''}`
  );

  return (
    <div className="register">
      <div className="register__content">
        <Link to="/" className="register__logo-link">
          <img src={logo} alt="Логотип сайта" className="register__logo" />
        </Link>
        
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form>
          <label className="register__form-label" htmlFor="register__name">Имя</label>
          <input className="register__form-input" id="register__name" type="text" value={name} onChange={handleChangeName} placeholder="Заполните поле имя пользователя" required></input>
          <label className="register__form-label" htmlFor="register__email">E-mail</label>
          <input className="register__form-input" id="register__email" type="email" value={email} onChange={handleChangeEmail} placeholder="Заполните поле email" required></input>
          <label className="register__form-label" htmlFor="register__password">Пароль</label>
          <input className="register__form-input" id="register__password" type="password" value={password} onChange={handleChangePassword} placeholder="Заполните поле пароль" required></input>
          <p className={errorTextClassName}>{errorMessage}</p>
          <button className="register__button-register" type="submit">
          <p className="register__button-text">Зарегистрироваться</p>
          </button>
        </form>
        
        <p className="register__text">Уже зарегистрированы?
          <Link to="/" className="register__text-link">Войти</Link>
        </p>        
      </div>
    </div>
  )
}

export default Register;
