import { Fragment } from 'react';
import './App.css';

function App() {
  const name = '테스트';
  return (
    <Fragment>
      <div>{name || '영희'}</div>
      <div>Test...</div>
    </Fragment>
  );
}

export default App;
