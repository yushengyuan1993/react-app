// import { ReactRouterDOM } from './config';

import Products from './pages/homepage/products/index';
import Study from './pages/homepage/study/index';
import Mine from './pages/homepage/mine/index';

// const { BrowserRouter, Route, Link } = ReactRouterDOM;
// const Router = BrowserRouter;

const routes = [
  { path: "/products", component: Products },
  { path: "/study", component: Study },
  { path: "/mine", component: Mine },
]

export default routes;
