import React, { Component } from 'react';

import './order.scss';
import order_list from '../../../mock/order_list';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: order_list
    };
  }

  transformStatus(status) {
    switch (status) {
      case 0:
        return '待付款';

      case 2:
        return '付款成功';

      case 3:
        return '待付款';
    
      default:
        break;
    }
  }

  render() {
    const item = this.state.list.map((el, i) => 
      <li key={i}>
        <div className="header border-top">
          <div className="order-num">订单编号：<span>{el.order_num}</span></div>
          <div className="order-status">{this.transformStatus(el.status)}</div>
        </div>
        <div className="body border-top">
          <div className="left">
            <div className="cover"><img src={el.cover} alt={el.title}/></div>
            <div className="title"><p>{el.title}</p></div>
          </div>
          <div className="right price">12.2</div>
        </div>
        <div className="footer">
          <div className="time"><span>{el.order_create_time}</span></div>
          <div className="detail">共1件商品 合计: &yen;<span>{el.promotional_price}</span></div>
        </div>
      </li>
    )

    return (
      <div className="order">
        <ul>
          {item}
        </ul>
      </div>
    )
  }
}

export default Order;
