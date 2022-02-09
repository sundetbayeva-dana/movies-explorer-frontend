class Auth {
  constructor(config) {
    this._url = config.url
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name })
    })
    .then(this._handleResponse)
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password})
    })
    .then(this._handleResponse)
  }

  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(this._handleResponse)
  }
}

const auth = new Auth({
  url: 'https://api.dana.movieservice.nomoredomains.rocks/api'
})

export default auth;