import React, { Component } from 'react';
// import PropTypes from "prop-types"
import './style.css';

export class NavBar extends Component {
  render() {
    console.log(this.props);
    const { children } = this.props;
    console.log(children);
    // children 表示组件标签包裹的所有内容

    return (
      <div className="nav-bar">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    );
  }
}

// NavBar.propTypes = {
//   children: PropTypes.array
// }

export default NavBar;
