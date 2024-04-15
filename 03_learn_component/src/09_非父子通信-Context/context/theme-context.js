import React from 'react';

// 1.创建一个Context
const ThemeContext = React.createContext({
  color: 'blue',
  size: 10,
  test: 1111,
});

export default ThemeContext;
