import React from 'react';
import HelloWorld from './HelloWorld';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isSHowHW: true,
    };
  }

  render() {
    const { isSHowHW } = this.state;
    return (
      <div>
        <h1>{isSHowHW + ''}</h1>
        <button onClick={() => this.setState({ isSHowHW: !isSHowHW })}>
          切换
        </button>
        {isSHowHW && <HelloWorld />}
      </div>
    );
  }
}

export default App;
