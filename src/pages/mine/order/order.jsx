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

      case 1:
        return '付款成功';

      case 2:
        return '已退款';
    
      default:
        break;
    }
  }

  render() {
    return (
      <div className="order">
        <ul>
          {
            this.state.list.map((item, i) => 
              <li key={i}>
                <div className="header border-top">
                  <div className="order-num">订单编号：<span>{item.order_num}</span></div>
                  <div className="order-status" data-status={item.status}>{this.transformStatus(item.status)}</div>
                </div>
                <div className="body border-top">
                  <div className="left">
                    <div className="cover"><img src={item.cover} alt={item.title}/></div>
                    <div className="title"><p>{item.title}</p></div>
                  </div>
                  <div className="right price">12.2</div>
                </div>
                <div className="footer">
                  <div className="time"><span>{item.order_create_time}</span></div>
                  <div className="detail">共1件商品 合计: &yen;<span>{item.promotional_price}</span></div>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Order;
