import { React } from '../../react';

import './Template.scss';

class Template extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: 'Template'
    }
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default Template;
