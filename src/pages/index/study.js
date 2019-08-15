import { React } from '../../config';

class Study extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 学习 页面'
    }
  }

  render () {
    return (
      <div>
        学习
      </div>
    )
  }
}

export default Study;
