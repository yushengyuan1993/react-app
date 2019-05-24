// import React from 'react';
// import ReactDOM from 'react-dom';
import { React, ReactDOM } from './config.js';
import './assets/styles/init.scss';
import App from './containers/App.js';
// import routes from './router.js';
import * as serviceWorker from './serviceWorker';

// const MOUNT_NODE = document.getElementById('root');

// let render = () => {
//   ReactDOM.render(
//     <App routes={routes}/>,
//     MOUNT_NODE
//   )
// }

// render();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
