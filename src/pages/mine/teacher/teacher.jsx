import React, { Component } from 'react';

// import style from './teacher.scss';

class HeadTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'teacher'
    };
  }

  render() {
    return (
      <div>
        我的班主任
      </div>
    )
  }
}

export default HeadTeacher;
