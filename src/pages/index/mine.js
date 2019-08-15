import { React } from '../../config';

class Study extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 我的 页面'
    }
  }

  render () {
    return (
      <div>
        我的
      </div>
    )
  }
}

export default Study;
