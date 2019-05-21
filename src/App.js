import React, {Component} from 'react';
import KzTabBar from './components/tabbar.js'
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      greeter: 'hi, react.'
    }
  }

  render () {
    return (
      <div className="App">
        <KzTabBar></KzTabBar>
      </div>
    )
  }
}

export default App;
