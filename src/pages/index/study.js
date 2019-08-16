import { React, ReactRouterDOM } from '../../react';
import Tabbar from '../../components/tabbar.js';

const { withRouter } = ReactRouterDOM;

class Study extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 学习 页面'
    }
  }

  render () {
    return (
      <div className="study">
        <div className="content">学习</div>
        
        <div className="footer"><Tabbar tab="study" /></div>
      </div>
    )
  }
}

export default withRouter(Study);
