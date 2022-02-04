import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';


function App() {

  const [menuVisible, setMenuVisible] = React.useState(false);


  function handleMenuClick() {
    setMenuVisible(true);
  }

  function handleMenuCloseButton() {
    setMenuVisible(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/movies" element={<Movies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
        onCloseButton={handleMenuCloseButton} />}>
        </Route>
        <Route path="/saved-movies" element={<SavedMovies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
        onCloseButton={handleMenuCloseButton} />}>
        </Route>
        <Route path="/profile" element={<Profile currentName="Дана" currentEmail="pochta@yandex.ru" />}>
        </Route>
        <Route path="/signup" element={<Register errorMessage="Что-то пошло не так..." />}>
        </Route>
        <Route path="/signin" element={<Login />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App; 
