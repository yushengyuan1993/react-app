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

// const banner = ['/static/images/course/8.png', '/static/images/course/9.png', '/static/images/course/10.png'];

const RenderContent = (props) => {
  const item = props.list.map((child, i) => {
    const type = child.type;

    switch (type) {
      case 'one_item':
        return <OneItem key={i} items={child.items} name={child.name} type={child.type} />
      
      case 'one_item_with_text':
        return <OneItemWithText key={i} items={child.items} name={child.name} type={child.type} />
      
      case 'two_item':
        return <TwoItem key={i} items={child.items} name={child.name} type={child.type} />

      case 'ad':
        return <AdItem key={i} items={child.items} name={child.name} type={child.type} />

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
    };
  }

  componentWillMount() {
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
          <RenderContent list={this.state.list} />
        </div>

        <Tabbar tab="product" />
      </div>
    )
  }
}

export default Product;
