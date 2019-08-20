
import Product from '../pages/index/product.js';
import Study from '../pages/index/study.js';
import Mine from '../pages/index/mine.js';

import Order from '../pages/mine/order.js';
import Remind from '../pages/mine/remind.js';
import HeadTeacher from '../pages/mine/head-teacher';
import Store from '../pages/mine/store';
import Coupon from '../pages/mine/coupon';

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
  {
    path: "/coupon",
    component: Coupon
  },
  {
    path: "/store",
    component: Store
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
