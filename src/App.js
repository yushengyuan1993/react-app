import React, {Component} from 'react';
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
        <div className="content">{this.state.greeter}</div>
      </div>
    )
  }
}

export default App;
