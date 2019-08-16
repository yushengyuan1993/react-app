/* eslint-disable no-undef */
import { React, ReactRouterDOM } from '../../react';
import Tabbar from '../../components/tabbar/tabbar.js';
import Header from '../../components/header/header.js';

import './product.scss';

const { withRouter } = ReactRouterDOM;

class Product extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 商品 页面'
    }

    KZ.setRootClassName('active-product');
  }

  render () {
    return (
      <div className="product">
        <Header />

        <div className="content">商品</div>

        <Tabbar tab="product" />
      </div>
    )
  }
}

export default withRouter(Product);
