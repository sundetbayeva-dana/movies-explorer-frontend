import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/movies" element={<Movies />}>
        </Route>
        <Route path="/saved-movies" element={<SavedMovies />}>
        </Route>
        <Route path="/profile" element={<Profile currentName="Дана" currentEmail="pochta@yandex.ru" />}>
        </Route>
        <Route path="/signin" element={<Login errorMessage="Что-то пошло не так..." />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App; 
