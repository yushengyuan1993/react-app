/* eslint-disable no-undef */
import React, { Component } from 'react';

// import { Carousel, WingBlank } from 'antd-mobile';

import productList from '../../../mock/product_v2';

import Tabbar from '../../../components/tabbar/tabbar';
import Header from '../../../components/header/header';

import TwoItem from './template/two-item';
import AdItem from './template/ad-item';
import OneItem from './template/one-item';

import styleClass from './index.module.scss';

// const banner = ['static/images/course/8.png', 'static/images/course/9.png', 'static/images/course/10.png'];

const RenderOneItemWithText = (props) => {
  return (
    <div className="one-item-with-text">
      <div className={styleClass.title}>
        <span></span>
        <strong>{props.name}</strong>
      </div>
      
    </div>
  )
}

const RenderContent = (props) => {
  const list = props.data;

  const item = list.map((el, i) => {
    const type = el.type;

    switch (type) {
      case 'one_item':
        return (
          <OneItem
            key={i}
            items={el.items}
            name={el.name}
            type={el.type}
            styleClass={styleClass}
          />
        )
      
      case 'one_item_with_text':
        return <RenderOneItemWithText key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'two_item':
        return (
          <TwoItem
            key={i}
            items={el.items}
            name={el.name}
            type={el.type}
            styleClass={{ item: styleClass['two-item'], title: styleClass.title }}
          />
        )

      case 'ad':
        return (
          <AdItem
            key={i}
            items={el.items}
            name={el.name}
            type={el.type}
            styleClass={{ item: styleClass['ad-item'] }}
          />
        )

      default:
        return null;
    }
  })

  return item;
}

class Product extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: null
    }

    // KZ.setRootClassName('active-product');
  }

  componentWillMount () {
    // ajax
    this.setState({
      list: productList
    })
  }

  render () {
    return (
      <div className={styleClass.product}>
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
