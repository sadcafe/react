import { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.div;
    this.div.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div style={style} ref={(ref) => (this.div = ref)}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
