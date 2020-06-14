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
          {
            this.props.items.map((item, i) => 
              <div className="item" key={item.product_id}>
                <div
                  className="cover"
                  style={{background: `url(${item.cover}) no-repeat center center/100% 100%`}}
                >
                  <div
                    className="icon"
                    style={{background: `url(/static/images/icons/video.png) no-repeat center center/100% 100%`}}
                  ></div>
                </div>
                <div className="content">
                  <div className="name">{item.title}</div>
                  <div className="tags">
                    {
                      item.tag1.map((tag, i) => 
                        <span className="tag" key={tag + i}>{tag}</span>
                      )
                    }
                  </div>
                  <div className="infos">
                  {
                      item.tag2.map((info, i) => 
                        <span
                          className="info"
                          key={info + i}
                          style={{background: `url(/static/images/icons/${i === 0 ? 'lesson' : 'head'}.png) no-repeat left center/auto 80%`}}
                        >{info}</span>
                      )
                    }
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
 
export default OneItemWithText;