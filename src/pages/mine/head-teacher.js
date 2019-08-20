import { React, ReactRouterDOM } from '../../react';

import './head-teacher.scss';

const { withRouter } = ReactRouterDOM;

class HeadTeacher extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '我的班主任'
    }
  }

  render () {
    return (
      <div className="head-teacher">{this.state.title}</div>
    )
  }
}

export default withRouter(HeadTeacher);
