import React, { Component } from 'react';

class Ad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return (
      <div className="ad-item">
        <img src={this.props.items[0].cover} alt="cover" />
      </div>
    );
  }
}
 
export default Ad;