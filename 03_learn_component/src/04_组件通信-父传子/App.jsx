import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: 'props 传递的数据',
    };
  }
  render() {
    const { msg } = this.state;
    return (
      <div className="App">
        <Header msg={msg} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
