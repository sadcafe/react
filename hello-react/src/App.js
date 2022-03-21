import { Component } from 'react';
// import MyComponent from './MyComponent';
// import MyComponentClass from './MyComponentClass';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import EventPracticeFunction from './EvnetPracticeFunction';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

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
