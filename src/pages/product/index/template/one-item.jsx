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
          {
            this.props.items.map((item, i) =>
              <div className="item" key={item.product_id}>
                <div
                  className="cover"
                  style={{background: `url(${item.cover}) no-repeat center center/100% 100%`}}
                >
                  <div className="join_number">{item.join_number && item.join_number}</div>
                </div>
                <div className="desc">
                  <div className="tags">{item.tags}</div>
                  <div className="friends">{Math.floor(Math.random() * 10 + 1)}个朋友可能在看</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
 
export default OneItem;