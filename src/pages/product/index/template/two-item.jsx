import React, { Component } from 'react';

class TwoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
            this.props.items.map((el, i) => 
              <div key={i} className={i % 2 === 0 ? 'lf' : 'rt'}>
                <div>
                  <span style={{background: `url(${el.icon}) no-repeat left center/auto 100%`}}></span>
                  <img src={el.cover} alt="cover" />
                </div>
                <div>{el.title}</div>
                <div>{el.tags}</div>
                <div>&yen; {el.price}</div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
 
export default TwoItem;