import { React } from '../../../config.js';

class Mine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      greeter: 'hi, react.'
    }
  }

  componentDidMount () {
    // ajax here
    this.setState({
      username: 'yushare',
      email: 'yushare1993@gmail.com'
    })
  }

  render () {
    return (
      <div>
        <p>我的</p>
        <p>{this.username}</p>
      </div>
    )
  }
}

export default Mine;
