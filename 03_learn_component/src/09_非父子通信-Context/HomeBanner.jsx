import ThemeContext from './context/theme-context';
import DataContext from './context/data-context.js';

function HomeBanner() {
  return (
    <div>
      {/* 函数式组件中使用Context共享的数据 */}
      <ThemeContext.Consumer>
        {(value) => {
          console.log('value===>', value);
          return <h2> Banner theme:{value.color}</h2>;
        }}
      </ThemeContext.Consumer>
      <DataContext.Consumer>
        {(value) => {
          console.log(value);
          return <h2> data:{value.data}</h2>;
        }}
      </DataContext.Consumer>
    </div>
  );
}

export default HomeBanner;
