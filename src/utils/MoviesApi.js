class MoviesApi {
  constructor(config) {
    this._url = config.url;

  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, {      
      method: 'GET'
    })
    .then(this._handleResponse)
  }  
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default moviesApi;