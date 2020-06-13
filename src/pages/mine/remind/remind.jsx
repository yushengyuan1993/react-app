import React, { Component } from 'react';

// import style from './index.scss';

class Remind extends Component {
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

export default Remind;
