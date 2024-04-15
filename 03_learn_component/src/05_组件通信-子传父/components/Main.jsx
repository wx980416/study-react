import React, { Component } from 'react';

export default class Main extends Component {
  changeCount(count) {
    this.props.changeCount(count);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changeCount(1)}>点击+1</button>
        <button onClick={() => this.changeCount(-1)}>点击-1</button>
      </div>
    );
  }
}
