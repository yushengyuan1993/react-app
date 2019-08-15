import { React } from '../../react';

class Study extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 商品 页面'
    }
  }

  render () {
    return (
      <div>
        商品
      </div>
    )
  }
}

export default Study;
