/* eslint-disable no-undef */
import React, { Component } from 'react';

import Tabbar from '../../../components/tabbar/tabbar.jsx';

import style from './index.module.scss';

class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: '这是 学习 页面'
    };
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div className={style.study}>
        <div className="content"><p>学习</p></div>
        
        <Tabbar tab="study" />
      </div>
    )
  }
}

export default Study;
