import { React, ReactRouterDOM } from '../../../config.js';
import TabBar from '../../../components/tabbar.js';
import PropTypes from 'prop-types';

const { withRouter } = ReactRouterDOM;

console.log(PropTypes);
class Products extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      intro: '这是 选课 页面'
    }
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  content () {
    return (
      <div>{this.state.intro}</div>
    )
  }

  render () {
    const { match, location, history } = this.props;

    return (
      <div>
        <TabBar renderContent={this.content.bind(this)} detail={this.detail}/>
      </div>
    )
  }
}

// export default Products;
export default withRouter(Products);
