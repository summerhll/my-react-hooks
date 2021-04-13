// eslint-disable-next-line
import React, {  useState,  useCallback, useRef, PureComponent, useEffect} from 'react';
import './App.css';

class Child extends PureComponent {
  speak(){
    console.log(`counter: ${this.props.count}`)
  }

  render() {
    const { props } = this;
    return (
      <div>
        <button onClick={props.changeCount}>Increment Count</button>
      </div>
    )
  }
}


function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('fruit');
  const childRef = useRef();
  const intervalRef = useRef(); //存储不同渲染周期之前需要共享的数据

  // useCallback
  const changeCount = useCallback(() => {
    setCount(count + 1)
    // console.log(childRef.current); //访问dom元素
    childRef.current.speak(); //执行子组件方法
  }, [count]);

  const changeName = () => {
    setName(name + 1)
  };

  useEffect(() => {
    intervalRef.current = setInterval(()=>{
      setCount(count => count + 1);
    }, 1000)

  }, [])

  useEffect(() => {
    if(count >= 10){
      clearInterval(intervalRef.current);
    }
  });


  //ref 要用于类组件
  return (
    <div>
      <div>Count is {count}</div>
      <div>Name is {name}</div>
      <br />
      <div>
        <button onClick={changeName}>Change Name</button>
        
        <Child ref={childRef} changeCount={changeCount} count = {count}/>
      </div>
    </div>
  )
}

export default App;
