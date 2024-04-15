import React, { Component } from 'react';
import Home from './Home';

import ThemeContext from './context/theme-context';
import UserContext from './context/user-context';
import DataContext from './context/data-context.js';
import Profile from './Profile';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      info: { name: 'kobe', age: 30 },
    };
  }

  render() {
    const { info } = this.state;

    return (
      <div>
        <h2>App</h2>
        {/* 1.给Home传递数据 */}
        {/* <Home name="why" age={18}/>
        <Home name={info.name} age={info.age}/>
        <Home {...info}/> */}

        {/* 2.普通的Home */}
        {/* 第二步操作: 通过ThemeContext中Provider中value属性为后代提供数据 */}
        <UserContext.Provider value={{ nickname: 'kobe', age: 30 }}>
          <ThemeContext.Provider value={{ color: 'red', size: '30' }}>
            <DataContext.Provider value={{ data: 11111111111111 }}>
              <Home {...info} />
            </DataContext.Provider>
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile />
      </div>
    );
  }
}

export default App;
