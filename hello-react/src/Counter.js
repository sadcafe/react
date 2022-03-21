import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  //   constructor(props) {
  //     super(props);
  //     // state의 초기값 설정
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //   onClick={() => {
          //     this.setState({ number: number + 1 });
          //     this.setState({ number: this.state.number + 1 });
          //   }}
          //   onClick={() => {
          //     this.setState((prevState, props) => {
          //       return { number: prevState.number + 1 };
          //     });

          //     this.setState((prevState) => ({
          //       number: prevState.number + 1,
          //     }));
          //   }}
          onClick={() => {
            this.setState(
              (prevState) => ({ number: prevState.number + 1 }),
              () => {
                console.log('방금 setState가 호출되었습니다.' + number);
                console.log(this.state.number);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
