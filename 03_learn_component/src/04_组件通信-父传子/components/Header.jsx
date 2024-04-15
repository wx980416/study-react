import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props); // 调用父类的构造函数 props 就是父组件传递过来的数据
    this.state = {};
  }

  render() {
    const { msg } = this.props;
    console.log(this.props);
    return (
      <div>
        Header
        <h1>{msg}</h1>
      </div>
    );
  }
}

export default Header;
