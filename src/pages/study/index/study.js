/* eslint-disable no-undef */
import React, { Component } from 'react';

import Tabbar from '../../../components/tabbar/tabbar.js';

import style from './study.module.scss';

class Study extends Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 学习 页面'
    }

    KZ.setRootClassName('active-study');
  }

  render () {
    return (
      <div className={style.study}>
        <div className="content"><p>学习</p></div>
        
        <Tabbar tab="study" />
      </div>
    )
  }
}

export default Study;