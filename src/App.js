import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import routers from './routes/router';

const route = routers.map((item, i) => <Route path={item.path} component={item.component} key={i} />);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <Router>
        <Switch>
          {route}
          <Redirect from='/' to='/product' />
        </Switch>
      </Router>
    );
  }
}
 
export default App;
