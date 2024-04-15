import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  changeCount(num) {
    this.setState({
      count: this.state.count + num,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>{count}</h1>
        <Header />
        <Main
          changeCount={(num) => {
            console.log('子组件传来的值');
            this.changeCount(num);
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
