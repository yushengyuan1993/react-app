import React from 'react';
import { withRouter } from 'react-router-dom';

import './order.scss';

class Order extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list:  [
        {
            "cover": "static/images/course/1.png",
            "title": "魔法作文课",
            "course_price": "59.00",
            "course_subject": 0,
            "promotional_price": "59.00",
            "status": 1,
            "course_status_desc": "开课中",
            "order_id": 172641,
            "order_num": "20190603509022081917",
            "order_status": 7,
            "refund_able_money": 59,
            "is_refund": 0,
            "order_status_desc": "已退款",
            "order_create_time": "2019-06-03 13:47:23"
        },
        {
            "cover": "static/images/course/2.png",
            "title": "改变世界的十大科学家",
            "course_price": "24.90",
            "course_subject": 2,
            "promotional_price": "9.90",
            "status": 1,
            "course_status_desc": "开课中",
            "order_id": 172563,
            "order_num": "20190603855358580974",
            "order_status": 7,
            "refund_able_money": 9.9,
            "is_refund": 0,
            "transfer_status": 2,
            "order_status_desc": "已退款",
            "order_create_time": "2019-06-03 10:53:29"
        },
        {
            "cover": "static/images/course/3.png",
            "title": "封神演义",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "status": 1,
            "course_status_desc": "开课中",
            "order_id": 171412,
            "order_num": "20190601529265681864",
            "order_status": 7,
            "refund_able_money": 1,
            "is_refund": 0,
            "transfer_status": 2,
            "order_status_desc": "已退款",
            "order_create_time": "2019-06-01 18:43:36"
        },
        {
            "cover": "static/images/course/4.png",
            "title": "孩子最爱的拼音动画课",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "status": 2,
            "course_status_desc": "开课中",
            "order_id": 171395,
            "order_num": "20190601173926309932",
            "order_status": 7,
            "refund_able_money": 1,
            "is_refund": 0,
            "transfer_status": 2,
            "order_status_desc": "已退款",
            "order_create_time": "2019-06-01 18:16:04"
        },
        {
            "cover": "static/images/course/5.png",
            "title": "少年世界史",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "status": 2,
            "course_status_desc": "开课中",
            "order_id": 171386,
            "order_num": "20190601113259445045",
            "order_status": 7,
            "refund_able_money": 1,
            "is_refund": 0,
            "transfer_status": 2,
            "order_status_desc": "已退款",
            "order_create_time": "2019-06-01 18:04:22"
        },
        {
            "cover": "static/images/course/6.png",
            "title": "看图写话三步法",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "status": 0,
            "course_status_desc": "开课中",
            "order_id": 171380,
            "order_num": "20190601640298811790",
            "order_status": 7,
            "refund_able_money": 1,
            "is_refund": 0,
            "transfer_status": 2,
            "order_status_desc": "已退款",
            "order_create_time": "2019-06-01 17:57:02"
        }
    ]
    }
    // console.error(props)
  }

  transformStatus (st) {
    if (st === 1) {
      return '付款成功'
    } else if (st === 2) {
      return '已退款'
    } else {
      return '待付款'
    }
  }

  render () {
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

export default withRouter(Order);
