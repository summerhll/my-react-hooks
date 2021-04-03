// eslint-disable-next-line
import React, { Component, useState, createContext } from 'react';
import './App.css';


const CountContext = createContext();


//方法一： CountContext.Consumer
// class Foo extends Component {
//   render() {
//     return (
//       <CountContext.Consumer>
//         {
//           count => <h1>{count}</h1>
//         }
//       </CountContext.Consumer>
//     )
//   }
// }


//方法二： CountContext.Consumer
class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          count => <h1>{count}</h1>
        }
      </CountContext.Consumer>
    )
  }
}

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button"
        onClick={() => { setCount(count + 1) }}>
        Click ({count})
      </button>
      <CountContext.Provider value={count}>
        <Foo/>
      </CountContext.Provider>
    </div>
  )

}

export default App;
