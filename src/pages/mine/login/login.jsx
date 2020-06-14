import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login.scss';

import LoginByPhone from './login-by-phone';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <div className="login">
        <div className="container">
          <Link to="/mine" className="back"></Link>
          <div className="logo"></div>
          <div className="content">
            <LoginByPhone />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Login;