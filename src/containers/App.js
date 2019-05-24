import { React, ReactRouter, ReactRouterDOM } from '../config.js';
import routes from '../router.js';
import './App.scss';

const { Router } = ReactRouter;
const { BrowserRouter, HashRouter } = ReactRouterDOM;

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
  componentDidMount() {
    // console.log(Router);
    console.log(ReactRouter);
    console.log(ReactRouterDOM);
  }
  

  render () {
    return (
      <div className="App">
        {/* <BrowserRouter children={routes}/> */}
      </div>
    )
  }
};

export default App;
