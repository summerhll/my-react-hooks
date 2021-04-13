// eslint-disable-next-line
import React, {  useState,  useEffect, useRef, useCallback} from 'react';
import './App.css';

//自定义hook, 复用代码
function useSize(){
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientWidth
  });

  const onResize = useCallback(()=>{
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientWidth
    });
  }, []);

  
  useEffect(()=>{
    window.addEventListener('resize', onResize, false);
    return ()=>{
      window.removeEventListener('resize', onResize, false);
    }
  })

  return [size];
}



//自定义Hook： 返回jsx
function useCounteJsx(count){
  const [size] = useSize();
  return (
    <div>
      <button >Increment Count {count}, {size.width} * {size.height}</button>
    </div>
  )
}

//将count相关的处理逻辑写在一个自定义hook中
function useCount(defaultCount){
  const [count, setCount] = useState(defaultCount);
  const intervalRef = useRef(); //存储不同渲染周期之前需要共享的数据
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

  return  [count, setCount];
}



function App() {
 
  const [count] = useCount(0);
  const [name, setName] = useState('fruit');
  
  const CounteJsx= useCounteJsx(count);
  const [size] = useSize();
 

  const changeName = () => {
    setName(name + 1)
  };


  //ref 要用于类组件
  return (
    <div>
      <div>size is : {size.width} * {size.height}</div>>
      <div>Count is {count}</div>
      <div>Name is {name}</div>
      <br />
      <div>
        <button onClick={changeName}>Change Name</button>
        
      {CounteJsx}
      </div>
    </div>
  )
}

export default App;
