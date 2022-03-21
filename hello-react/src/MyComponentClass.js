import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentClass extends Component {
  static defaultPorps = {
    name: '기본 이름',
  };

  static propsTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다.
        <br />
        children값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponentClass.defaultProps = {
//   name: '기본 이름',
// };

// MyComponentClass.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponentClass;
