import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: 'Hello World',
    };
  }
  render() {
    const { msg } = this.state;
    return (
      <div className="App">
        <h1>{msg}</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
