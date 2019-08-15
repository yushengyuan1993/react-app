import { React, ReactRouterDOM } from '../../react';
import { List } from 'antd-mobile';
const { Link, withRouter } = ReactRouterDOM;

const Item = List.Item;
// const Brief = Item.Brief;

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
    console.log(link);
  }

  handleClickItemTest (link) {
    console.log(this.props);
    this.props.history.push(link);
  }

  render () {
    let item1 = this.state.list1.map((el, i) => 
      
      <Link to={el.link} key={i}>
        <Item
          extra={el.desc}
          arrow="horizontal"
          multipleLine={true}
          onClick={(e) => this.handleClickItem(el.link)}
        >
          {el.title}
        </Item>
      </Link>
    )

    let item2 = this.state.list2.map((el, i) => 
      <Item
        key={i}
        extra={el.desc}
        arrow="horizontal"
        multipleLine={true}
        onClick={(e) => this.handleClickItemTest(el.link)}
      >
        {el.title}
      </Item>
    )

    return (
      <div>
        <div className="header">
          <div>
            <div className="avatar"><img src="/static/images/avatar.jpg" alt="avatar"/></div>
            <div className="name">神奇海螺</div>
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <List className="item">
              {item1}
            </List>
          </div>
          <div className="item">
            <List className="item">
              {item2}
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Mine);
