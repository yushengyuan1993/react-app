import { React, ReactRouterDOM } from '../../react';
import { ListView } from 'antd-mobile';

import './order.scss';

const { withRouter } = ReactRouterDOM;

class Order extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list:  [
        {
            "course_image": "static/images/course/1.png",
            "course_name": "魔法作文课",
            "course_price": "59.00",
            "course_subject": 0,
            "promotional_price": "59.00",
            "course_status": 2,
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
            "course_image": "static/images/course/2.png",
            "course_name": "改变世界的十大科学家",
            "course_price": "24.90",
            "course_subject": 2,
            "promotional_price": "9.90",
            "course_status": 2,
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
            "course_image": "static/images/course/3.png",
            "course_name": "封神演义",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "course_status": 2,
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
            "course_image": "static/images/course/4.png",
            "course_name": "孩子最爱的拼音动画课",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "course_status": 2,
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
            "course_image": "static/images/course/5.png",
            "course_name": "少年世界史",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "course_status": 2,
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
            "course_image": "static/images/course/6.png",
            "course_name": "看图写话三步法",
            "course_price": "5.00",
            "course_subject": 0,
            "promotional_price": "1.00",
            "course_status": 2,
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
    console.error(props)
  }


  render () {
    let item = this.state.list.map((el, i) => 
      <li key={i}>
        <div className="header border-top">
          <div className="order-num">left</div>
          <div className="order-status">right</div>
        </div>
        <div className="body border-top">
          body
        </div>
        <div className="footer">
          footer
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
