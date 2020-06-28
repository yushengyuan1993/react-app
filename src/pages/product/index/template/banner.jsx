import React, { Component } from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

class Banner extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="banner">
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.props.list.map(val => (
              <a
                key={val}
                href="/"
                style={{ display: 'inline-block', width: '100%' }}
              >
                <img
                  src={val}
                  alt="banner"
                  className="banner-img"
                  style={{ width: '100%', verticalAlign: 'top' }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    )
  }
}

export default Banner;
