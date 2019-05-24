import { React, ReactRouter } from '../config.js';
import routes from '../router.js';
import './App.scss';

const { browserHistory, hashHistory, BrowserRouter } = ReactRouter;

class App extends React.Component {
  // static propTypes = {
  //   routes : React.PropTypes.object.isRequired
  // }

  // shouldComponentUpdate () {
  //   return false
  // }

  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (
      <div className="App">
        <ReactRouter history={hashHistory} />
      </div>
    )
  }
};

export default App;
