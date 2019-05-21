import { React } from '../../../config.js';

class Mine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      greeter: 'hi, react.'
    }
  }

  render () {
    return (
      <div>我的</div>
    )
  }
}

export default Mine;
