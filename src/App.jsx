// eslint-disable-next-line
import React, { Component, useEffect, useState} from 'react'; 
import './App.css';
class App2 extends Component {
  state = {
    count: 0,
    size : {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }

  onResize = ()=>{
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
    })

  }
  componentDidMount(){
    document.title = this.state.count;
    window.addEventListener("resize", this.onResize, false)
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.onResize, false)
  }

  componentDidUpdate(){
    document.title= this.state.count;
  }

  render() {
    const { count,size}  = this.state;
    return (
      <button onClick = { ()=> { this.setState({ count : count + 1})}}> 
      Click ({count})
      Size({size.width} * {size.height})
      </button>
    );
  }
}

function App(props){
  //const [count, setCount] = useState(0);

  const [count, setCount] = useState(()=>{
    console.log("initial count...");
    return props.defaultCount || 0; //只触发一次
  });

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = ()=>{
    setSize({ 
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  };
  
   // useEffect的第二个参数是一个可选的数组，重新渲染时，只有在数组的每一项都不变的情况下，useEffect才不会执行。
  useEffect(()=>{
    console.log("count: " + count)
  }, [count]); //在count改变时，useEffect执行


  useEffect(()=>{
    document.title = count;
  });  //useEffect每次渲染时执行一次

 
  useEffect(()=>{
    window.addEventListener("resize", onResize, false);
    return ()=>{ //effect返回函数, React将会在执行清楚操作时调用它清除它
      window.removeEventListener("resize", onResize, false);
    }
  }, []); //useEffect只执行一次


  return (
    <button onClick = { ()=> { setCount( count + 1 )}}>
       ClickAPP({count})   
       Size({size.width} * {size.height})
    </button>
  );

}

export default App;
