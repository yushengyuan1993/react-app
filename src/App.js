// import React from 'react';
import { React, ReactRouterDOM } from './config.js';
// import Routes from './router.js';
import KzTabBar from './components/tabbar.js'
import './App.scss';

// import Products from './pages/homepage/products/index';
// import Study from './pages/homepage/study/index';
// import Mine from './pages/homepage/mine/index';

const { BrowserRouter, Route, Link } = ReactRouterDOM;
// console.log(Routes);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      greeter: 'hi, react.'
    }
  }

  render () {
    return (
      <div className="App">
        {/* <div className="router-view">
          <BrowserRouter>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/products">products</Link>
                  </li>
                  <li>
                    <Link to="/study">study</Link>
                  </li>
                  <li>
                    <Link to="/mine">mine</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/products" component={Products} />
              <Route path="/study" component={Study} />
              <Route path="/mine" component={Mine} />
            </div>
          </BrowserRouter>
        </div> */}
        <KzTabBar></KzTabBar>
      </div>
    )
  }
}

export default App;
