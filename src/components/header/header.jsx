import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`border-top ${style.header}`}>
        <div className="user">
          <span className="avatar"><img src="static/images/avatar.jpg" alt="avatar"/></span>
          <span className="name">神奇海螺</span>
        </div>
        <div className="info">
          <Link to="/mine" className="coin">
            <span className="icon"></span>
            <span className="num">233</span>
          </Link>
          <Link to="/mine" className="carrot">
            <span className="icon"></span>
            <span className="num">2019</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header;
