import React, { Component } from 'react';

class OneItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() { 
    return (
      <div className={this.props.styleClass.item}>
        <div className={this.props.styleClass.title}>
          <span></span>
          <strong>{this.props.name}</strong>
        </div>
        <div className="fk">
          ggg
        </div>
      </div>
    );
  }
}
 
export default OneItem;