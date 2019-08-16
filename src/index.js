
import './config/base.config.js';

import { React, ReactDOM, ReactRouterDOM } from './react.js';
import * as serviceWorker from './serviceWorker.js';
// import { Provider } from 'react-redux';
import Routes from './routes/router.js';

import './assets/css/init.scss';
import './assets/css/coverage.scss';
import './assets/css/normalize.css';

const { BrowserRouter, Route, Switch } = ReactRouterDOM;

console.log(Routes);
let route = Routes.map((item, i) => <Route path={item.path} component={item.component} key={i} />)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {route}
    </Switch>
  </BrowserRouter>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
