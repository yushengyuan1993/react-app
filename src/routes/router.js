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
    component: Product,
    meta: {
      title: '选课',
    }
  },
  {
    path: "/study",
    component: Study,
    meta: {
      title: '学习',
    }
  },
  {
    path: "/mine",
    component: Mine,
    meta: {
      title: '我的',
    }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: '登录',
    }
  },
  {
    path: "/order",
    component: Order,
    meta: {
      title: '我的订单',
    }
  },
  {
    path: "/remind",
    component: Remind,
    meta: {
      title: '学习时间提醒',
    }
  },
  {
    path: "/teacher",
    component: HeadTeacher,
    meta: {
      title: '我的班主任',
    }
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
