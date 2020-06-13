
import Product from '../pages/product/index/product.js';
import Study from '../pages/study/index/study.js';
import Mine from '../pages/mine/index/mine.js';

import Order from '../pages/mine/order.js';
import Remind from '../pages/mine/remind.js';
import HeadTeacher from '../pages/mine/head-teacher';

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
    path: "/study",
    component: Study
  },
  {
    path: "/mine",
    component: Mine
  },

  {
    path: "/order",
    component: Order
  },
  {
    path: "/remind",
    component: Remind
  },
  {
    path: "/head-teacher",
    component: HeadTeacher
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
