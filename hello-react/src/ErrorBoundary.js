import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
    // info: null,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
      //   info: info,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) {
      return <div>에러가 발생하였습니다.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
