import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login ({errorMessage}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')

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
        <Link to="/" className="login__logo-link">
          <img src={logo} alt="Логотип сайта" className="login__logo" />
        </Link>        
        <h1 className="login__heading">Рады видеть!</h1>
        <form>
          <label className="login__form-label" htmlFor="login__email">E-mail</label>
          <input className="login__form-input" id="login__email" type="email" value={email} onChange={handleChangeEmail} placeholder="Заполните поле email" required></input>
          <label className="login__form-label" htmlFor="login__password" >Пароль</label>
          <input className="login__form-input" id="login__password" type="password" value={password} onChange={handleChangePassword} placeholder="Заполните поле пароль" required></input>
          <p className={errorTextClassName}>{errorMessage}</p>
          <button className="login__button-login" type="submit">
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
