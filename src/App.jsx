// eslint-disable-next-line
import React, { Component, useState, useMemo } from 'react';
import './App.css';







function Counter(props){
  return (
    <h1>{props.count}</h1>
  )
}

//useMemo 用于性能优化，在渲染时执行
//useEffect 在渲染后执行
function App(props) {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);


  //useMemo可以依赖另一个useMemo，但是不要循环依赖
  const half = useMemo(() =>{
    return double / 4;
  }, [double]);

  return (
    <div>
      <button type="button"
        onClick={() => { setCount(count + 1) }}>
        Click ({count}), double : ({double}), half : ({half})
      </button>
        <Counter count = {count}/>
    </div>
  )

}

export default App;
