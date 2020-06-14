import Product from '../pages/product/index/index.jsx';
import Study from '../pages/study/index/index.jsx';
import Mine from '../pages/mine/index/index.jsx';

import Login from '../pages/mine/login/login.jsx';
import Order from '../pages/mine/order/order.jsx';
import Remind from '../pages/mine/remind/remind.jsx';
import HeadTeacher from '../pages/mine/teacher/teacher.jsx';

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
    path: "/login",
    component: Login
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
    path: "/teacher",
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
