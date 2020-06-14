/* eslint-disable no-undef */
import React, { Component } from 'react';

// import { Carousel, WingBlank } from 'antd-mobile';

import productList from '../../../mock/product_v2';

import Tabbar from '../../../components/tabbar/tabbar.jsx';
import Header from '../../../components/header/header.jsx';

import TwoItem from './template/two-item.jsx';
import AdItem from './template/ad-item.jsx';
import OneItem from './template/one-item.jsx';
import OneItemWithText from './template/one-item-with-text.jsx';

import styles from './index.module.scss';

// const banner = ['static/images/course/8.png', 'static/images/course/9.png', 'static/images/course/10.png'];

const RenderContent = (props) => {
  const list = props.data;

  const item = list.map((el, i) => {
    const type = el.type;

    switch (type) {
      case 'one_item':
        return <OneItem key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'one_item_with_text':
        return <OneItemWithText key={i} items={el.items} name={el.name} type={el.type} />
      
      case 'two_item':
        return <TwoItem key={i} items={el.items} name={el.name} type={el.type} />

      case 'ad':
        return <AdItem key={i} items={el.items} name={el.name} type={el.type} />

      default:
        return null;
    }
  })

  return item;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }

  componentWillMount() {
    KZ.setRootClassName('active-product');

    // ajax
    this.setState({
      list: productList
    })
  }

  render() {
    return (
      <div className={styles.product}>
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
