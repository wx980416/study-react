import React, { PureComponent, createRef, forwardRef } from 'react';

// forwardRef: 高阶组件，可以获取到函数组件的DOM节点
const HelloWorld = forwardRef(function (props, ref) {
  console.log(props.name);
  return (
    <div>
      <h1 ref={ref}>Hello World</h1>
      <p>哈哈哈</p>
      <h1>name: {props.name}</h1>
    </div>
  );
});

export class App extends PureComponent {
  constructor() {
    super();

    this.hwRef = createRef();
  }

  getComponent() {
    console.log(this.hwRef.current);
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} name="HelloWorld" />
        <button onClick={(e) => this.getComponent()}>获取组件实例</button>
      </div>
    );
  }
}

export default App;
