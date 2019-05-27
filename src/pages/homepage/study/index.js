import { React } from '../../../config.js';
import TabBar from '../../../components/tabbar.js';

class Study extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 学习 页面'
    }
  }

  content () {
    return (
      <div>{this.state.intro}</div>
    )
  }

  render () {
    return (
      <div>
        <TabBar renderContent={this.content.bind(this)}/>
      </div>
    )
  }
}

export default Study;
