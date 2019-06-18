import Products from '../pages/homepage/products/index';
import Study from '../pages/homepage/study/index';
import Mine from '../pages/homepage/mine/index';

const routes = [
  {
    path: "/products",
    exact: true,
    component: Products
  },
  {
    path: "/study",
    component: Study
  },
  {
    path: "/mine",
    component: Mine
  }
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
