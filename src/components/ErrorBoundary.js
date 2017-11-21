/**
 * Created by lenovo on 2017/11/13.
 */
import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null
    }
  }
  componentDidCatch(err, info) {
    this.setState({hasError: true, errorInfo: info});

  }

  render() {
    if (this.state.hasError) {
      console.log(this.state.errorInfo);
      return <div>something has error</div>
    }

    return <div>{this.props.children}</div>
  }
}

export default ErrorBoundary;

