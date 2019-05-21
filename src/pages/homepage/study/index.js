import { React } from '../../../config.js';

class Study extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      greeter: 'hi, react.'
    }
  }

  render () {
    return (
      <div>学习</div>
    )
  }
}

export default Study;
