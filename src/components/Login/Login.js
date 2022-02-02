import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login ({errorMessage}) {

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
    `${errorMessage ? 'login__error-text' : ''}`
  );

  return (
    <div className="login">
      <div className="login__content">
        <img src={logo} alt="Логотип сайта" className="login__logo" />
        <h1 className="login__heading">Рады видеть!</h1>
        <form>
          <label className="login__form-label" htmlFor="login__email">E-mail</label>
          <input className="login__form-input" id="login__email" type="email" value={email} onChange={handleChangeEmail} required></input>
          <label className="login__form-label" htmlFor="login__password">Пароль</label>
          <input className="login__form-input" id="login__password" type="password" value={password} onChange={handleChangePassword} required></input>
          <p className={errorTextClassName}>{errorMessage}</p>
          <button className="login__button-register" type="submit">
          <p className="login__button-text">Войти</p>
          </button>
        </form>
        
        <p className="login__text">Еще не зарегистрированы?
          <Link to="/" className="login__text-link">Регистрация</Link>
        </p>
        
      </div>
      

          
    </div>
  )
}

export default Login;
