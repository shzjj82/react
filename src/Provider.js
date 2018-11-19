import {Component} from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {

  static childContextTypes={
    store: PropTypes.object,
    text:PropTypes.string
  }

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render(){
    return this.props.children;
  }

}

export default  Provider
