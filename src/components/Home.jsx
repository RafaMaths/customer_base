import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Seja bem vindo</h1>
        <h4>Clique para fazer seu login!</h4>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;