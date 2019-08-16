import { React, ReactRouterDOM } from '../../react';
const { withRouter } = ReactRouterDOM;

class HeadTeacher extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'head-teacher'
    }
  }

  render () {
    return (
      <div>
        我的班主任
      </div>
    )
  }
}

export default withRouter(HeadTeacher);
