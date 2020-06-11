import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './config/base.config';

import * as serviceWorker from './serviceWorker';

import routers from './routes/router';

import './assets/css/init.scss';
import './assets/css/coverage.scss';
import './assets/css/normalize.css';

const route = routers.map((item, i) => {
  return <Route path={item.path} component={item.component} key={i} />;
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {route}
      <Redirect from='/' to='/product' />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
