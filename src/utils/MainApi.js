class MainApi {
  constructor(config) {
    this._url = config.url
    this._picUrl = config.picUrl;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${this._picUrl}${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `${this._picUrl}${data.image.formats.thumbnail.url}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        movieId: data.id,
      })
    })
    .then(this._handleResponse)     
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(this._handleResponse)
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(this._handleResponse)
  }

  getUserInformation() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(this._handleResponse)
  }
}

const mainApi = new MainApi({
  url: 'https://api.dana.movieservice.nomoredomains.rocks/api',
  picUrl: 'http://api.nomoreparties.co',
})

export default mainApi;