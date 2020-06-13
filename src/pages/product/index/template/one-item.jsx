import React, { Component } from 'react';

class OneItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() { 
    return (
      <div className="one-item">
        <div className="title">
          <span></span>
          <strong>{this.props.name}</strong>
        </div>
        <div className="container">
          
        </div>
      </div>
    );
  }
}
 
export default OneItem;