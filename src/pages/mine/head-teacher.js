import React, { Component } from 'react';

class HeadTeacher extends Component {
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

export default HeadTeacher;
