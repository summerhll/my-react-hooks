import React, { Component, lazy, Suspense} from 'react';
import './App.css';

const About  = lazy(()=> import(/* webpackChunkName:"about" */'./About.jsx')); //异步导入组件

//ErrorBoundary
//错误处理方式1：componentDidCatch
//错误处理方式2: getDerivedStateFromError

class App extends Component {
  state = {
    hasError: false
    
  }

  //错误处理方式1
  // componentDidCatch(){
  //   this.setState({
  //     hasError : true
  //   })
  // }

  //错误处理方式2
  static getDerivedStateFromError(){
    return {
      hasError : true
    }

  }

  render() {
    if(this.state.hasError){
      return <div>Error</div>
    }

    /** Suspense 和 Lazy 配合使用*/
    return (<div>
      <Suspense fallback= { <div>loading</div>}>
         <About></About>
      </Suspense>
    </div>
    );
  }
}


export default App;
