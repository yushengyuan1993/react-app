import { React } from '../../react';

import './coupon.scss';

class Coupon extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '我的券包'
    }
  }

  render () {
    return (
      <div className="coupon">{this.state.title}</div>
    )
  }
}

export default Coupon;
