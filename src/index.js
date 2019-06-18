import './assets/styles/init.scss';

import { React, ReactDOM } from './config.js';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// const { BrowserRouter } = ReactRouterDOM;


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <Provider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>, document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
