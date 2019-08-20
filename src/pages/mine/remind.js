import { React, ReactRouterDOM } from '../../react';

import './remind.scss';

const { withRouter } = ReactRouterDOM;

class Remind extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '学习时间提醒'
    }
  }

  render () {
    return (
      <div className="remind">{this.state.title}</div>
    )
  }
}

export default withRouter(Remind);
