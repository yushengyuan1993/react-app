import React from 'react';
import { withRouter } from 'react-router-dom';

class Remind extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'remind'
    }
  }

  render () {
    return (
      <div>
        学习时间提醒
      </div>
    )
  }
}

export default withRouter(Remind);
