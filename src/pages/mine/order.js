import { React, ReactRouterDOM } from '../../react';
const { Link, withRouter } = ReactRouterDOM;

class Order extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'order'
    }
    console.error(props)
  }


  render () {
    return (
      <div>
        我的订单
      </div>
    )
  }
}

export default withRouter(Order);
