import React, { PureComponent } from 'react';

// PureComponent 优点：
// 1. 性能优化，只渲染组件需要更新的部分，减少不必要的渲染
// 2. 减少不必要的子组件渲染，提高性能
// 3. 减少不必要的state更新，提高性能
// 4. 避免不必要的生命周期函数调用，提高性能
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      // 对象类型需要创建新的对象进行替换
      books: [
        { name: '你不知道JS', price: 99, count: 1 },
        { name: 'JS高级程序设计', price: 88, count: 1 },
        { name: 'React高级设计', price: 78, count: 2 },
        { name: 'Vue高级设计', price: 95, count: 3 },
      ],
      friend: {
        name: 'kobe',
      },
      message: 'Hello World',
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   shallowEqual(nextProps, this.props)
  //   shallowEqual(nextState, this.state)
  // }

  addNewBook() {
    const newBook = { name: 'Angular高级设计', price: 88, count: 1 };

    // 1.直接修改原有的state, 重新设置一遍
    // 在PureComponent是不能引入重新渲染(re-render)
    this.state.books.push(newBook);
    this.setState({ books: this.state.books });

    // 2.赋值一份books, 在新的books中修改, 设置新的books
    const books = [...this.state.books];
    books.push(newBook);

    this.setState({ books: books });
  }

  addBookCount(index) {
    // this.state.books[index].count++
    const books = [...this.state.books];
    books[index].count++;
    this.setState({ books: books });
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  name:{item.name}-price:{item.price}-count:{item.count}
                </span>
                <button onClick={(e) => this.addBookCount(index)}>+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.addNewBook()}>添加新书籍</button>
      </div>
    );
  }
}

export default App;
