
import { React, ReactDOM, ReactRouterDOM } from './config';
import indexPage from './pages/index/index';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
import './assets/styles/init.scss';

const { BrowserRouter, Route } = ReactRouterDOM;

ReactDOM.render(
  <BrowserRouter>
    <Route path="/index" component={indexPage} exact />
  </BrowserRouter>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
