/* eslint-disable no-undef */
import React, { Component } from 'react';

import Tabbar from '../../../components/tabbar/tabbar.jsx';
import { List } from 'antd-mobile';

import './index.scss';

const Item = List.Item;

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: [
        {
          title: '我的订单',
          link: 'order'
        },
        {
          title: '我的班主任',
          link: 'teacher'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        }
      ],
      list2: [
        {
          title: '我的券包',
          link: 'order'
        },
        {
          title: '兑换好礼',
          link: 'teacher'
        }
      ]
    };
  }

  componentWillMount() {
    
  }

  handleClickItem(link) {
    console.log(this.props);
    this.props.history.push({
      pathname: link,
      search: 'name=ysy&age=18',
      state: 'oops'
    });
  }

  render() {
    const item1 = this.state.list1.map((el, i) => 
      <Item
        key={i}
        extra={el.desc}
        arrow="horizontal"
        multipleLine={true}
        onClick={(e) => this.handleClickItem(el.link)}
      >
        {el.title}
      </Item>
    )

    const item2 = this.state.list2.map((el, i) => 
      <Item
        key={i}
        extra={el.desc}
        arrow="horizontal"
        multipleLine={true}
        onClick={(e) => this.handleClickItem(el.link)}
      >
        {el.title}
      </Item>
    )

    return (
      <div className="mine">
        <div className="header">
          <div>
            <div className="avatar"><img src="/static/images/avatar.jpg" alt="avatar"/></div>
            <div className="name">神奇海螺</div>
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <List>
              {item1}
            </List>
          </div>
          <div className="item">
            <List>
              {item2}
            </List>
          </div>
        </div>

        <Tabbar tab="mine" />
      </div>
    )
  }
}

export default Mine;
