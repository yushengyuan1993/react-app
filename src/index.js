
import './config/base.config.js';

import { React, ReactDOM, ReactRouterDOM } from './react.js';
import * as serviceWorker from './serviceWorker.js';
import { Provider } from 'react-redux';
import routers from './routes/router.js';

import './assets/css/init.scss';
import './assets/css/coverage.scss';
import './assets/css/normalize.css';

// console.log(routers);

const { BrowserRouter, Route, Switch } = ReactRouterDOM;

const route = routers.map((item, i) => {
  return <Route path={item.path} component={item.component} key={i} />;
});

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Switch>
        {route}
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
