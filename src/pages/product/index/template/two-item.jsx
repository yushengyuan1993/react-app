import React, { Component } from 'react';

class TwoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() { 
    return (
      <div className="two-item">
        <div className="title">
          <span></span>
          <strong>{this.props.name}</strong>
        </div>
        <div className="clearfix">
          {
            this.props.items.map((item, i) => 
              <div key={item.product_id} className={i % 2 === 0 ? 'lf' : 'rt'}>
                <div>
                  <span style={{background: `url(${item.icon}) no-repeat left center/auto 100%`}}></span>
                  <img src={item.cover} alt="cover" />
                </div>
                <div>{item.title}</div>
                <div>{item.tags}</div>
                <div>&yen; {item.price}</div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
 
export default TwoItem;