import { Component } from 'react';
// import MyComponent from './MyComponent';
// import MyComponentClass from './MyComponentClass';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import EventPracticeFunction from './EvnetPracticeFunction';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LiftCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  const colorString = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log(colorString);
  return colorString;
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LiftCycleSample color={this.state.color}></LiftCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//         <IterationSample></IterationSample>
//       </div>
//     );
//   }
// }

// const App = () => {
//   // return <EventPracticeFunction></EventPracticeFunction>;
//   // return <Say></Say>;
//   // return (
//   //   // <MyComponent name="React" favoriteNumber={4}>
//   //   //   리액트
//   //   // </MyComponent>
//   //   // <br />
//   //   // <MyComponentClass name="React" favoriteNumber={7}>
//   //   //   리액트
//   //   // </MyComponentClass>
//   //   // <Counter></Counter>
//   //   <Say />
//   // );
// };

export default App;
