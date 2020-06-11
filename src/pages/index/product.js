/* eslint-disable no-undef */
import React, { Component } from 'react';

// import { Carousel, WingBlank } from 'antd-mobile';

import Tabbar from '../../components/tabbar/tabbar.js';
import Header from '../../components/header/header.js';

import productStyle from './product.module.scss';

import productList from '../../mock/product_list.js';

// const banner = ['static/images/course/8.png', 'static/images/course/9.png', 'static/images/course/10.png'];


function RenderContent (props) {
  const list = props.data;

  const item = list.map((el, i) => {
    const type = el.type;

    switch (type) {
      case 'one_item':
        return <RenderOneItem key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'one_item_with_text':
        return <RenderOneItemWithText key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'two_item':
        return <RenderTwoItem key={i} items={el.items} name={el.name} type={el.type} />

      case 'ad':
        return <RenderAdItem key={i} items={el.items} name={el.name} type={el.type} />

      default:
        return null;
    }
  })

  return item;
}

function RenderOneItem (props) {
  return (
    <div className="one-item">
      <div className={productStyle.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>

    </div>
  )
}
function RenderOneItemWithText (props) {
  return (
    <div className="one-item-with-text">
      <div className={productStyle.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>
      
    </div>
  )
}
function RenderTwoItem (props) {
  return (
    <div className={productStyle['two-item']}>
      <div className={productStyle.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>
      <div className="clearfix">
        {
          props.items.map((el, i) => 
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
  )
}
function RenderAdItem (props) {
  return (
    <div className={productStyle['ad-item']}>
      <img src={props.items[0].cover} alt="cover" />
    </div>
  )
}

class Product extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: null
    }

    KZ.setRootClassName('active-product');
  }

  componentWillMount () {
    // ajax
    this.setState({
      list: productList
    })
  }

  render () {
    return (
      <div className={productStyle.product}>
        <Header />

        <div className="content">
          <RenderContent data={this.state.list} />
        </div>

        <Tabbar tab="product" />
      </div>
    )
  }
}

export default Product;
