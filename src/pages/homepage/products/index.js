import { React } from '../../../config.js';

class Products extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      greeter: 'hi, react.'
    }
  }

  render () {
    return (
      <div>选课</div>
    )
  }
}

export default Products;
