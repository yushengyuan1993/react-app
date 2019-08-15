
import Product from '../pages/index/product.js';
import Order from '../pages/mine/order.js';

const routes = [
  // {
  //   path: "/products",
  //   exact: true,
  //   component: Products
  // },
  {
    path: "/product",
    component: Product
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/order",
    component: Order
  },
]

export default routes;

// import React from 'react';
// import { Route } from 'react-router-dom';
// import { Products, Study, Mine} from '../pages/homepage';

// export default [
//   <Route path="/products" component={Products} exact key="products" />,
//   <Route path="/study" component={Study} exact key="study" />,
//   <Route path="/mine" component={Mine} exact key="mine" />
// ];
