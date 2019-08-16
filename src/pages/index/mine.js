import { React, ReactRouterDOM } from '../../react';
import Tabbar from '../../components/tabbar.js';
import { List } from 'antd-mobile';

import './mine.scss';

const { withRouter } = ReactRouterDOM;

const Item = List.Item;

class Mine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list1: [
        {
          title: '我的订单',
          link: 'order'
        },
        {
          title: '我的班主任',
          link: 'head-teacher'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
        },
        {
          title: '学习时间提醒',
          link: 'remind',
          desc: '10:30'
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
          link: 'head-teacher'
        }
      ]
    }
  }

  handleClickItem (link) {
    console.log(this.props);
    this.props.history.push({
      pathname: link,
      search: 'name=ysy&age=18',
      state: 'oops'
    });
  }

  render () {
    let item1 = this.state.list1.map((el, i) => 
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

    let item2 = this.state.list2.map((el, i) => 
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

        <div className="footer"><Tabbar tab="mine" /></div>
      </div>
    )
  }
}

export default withRouter(Mine);
