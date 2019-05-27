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
