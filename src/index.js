import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './config/base.config';

import * as serviceWorker from './serviceWorker';

import routers from './routes/router';

import './assets/css/init.scss';
import './assets/css/coverage.scss';
import './assets/css/normalize.css';

const route = routers.map((item, i) => <Route path={item.path} component={item.component} key={i} />);

render(
  <Router>
    <Switch>
      {route}
      <Redirect from='/' to='/product' />
    </Switch>
  </Router>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
