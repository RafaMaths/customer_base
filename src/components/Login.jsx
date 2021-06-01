import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <forms>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            onChange={ () => {}}
            required
          />
        </label>
        <label htmlFor="password">
          Senha
        <input
          type="password"
          name="password"
          onChange={() => {}}
          required
        />
        </label>
        <button
          type="button"
          onClick={() => {}}
        >Entrar
        </button>
      </forms>
    )
  }
}

export default Login;
