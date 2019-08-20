import { React } from '../../react';

import './store.scss';

class Store extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '兑换好礼'
    }
  }

  render () {
    return (
      <div className="store">{this.state.title}</div>
    )
  }
}

export default Store;
