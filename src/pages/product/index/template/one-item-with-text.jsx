import React, { Component } from 'react';

class OneItemWithText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return (
      <div className="one-item-with-text">
        <div className="title">
          <span></span>
          <strong>{this.props.name}</strong>
        </div>
        <div className="container">
          <div className="item">
            <div className="cover">
              <div className="icon"></div>
            </div>
            <div className="content">
              <div className="name"></div>
              <div className="tags"></div>
              <div className="info"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default OneItemWithText;