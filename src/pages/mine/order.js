import { React } from '../../react';

class Order extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'order'
    }
  }

  render () {
    return (
      <div>
        order
      </div>
    )
  }
}

export default Order;
