// eslint-disable-next-line
import React, { Component, PureComponent, memo } from 'react'; 
import './App.css';


//方法一：使用Component和shouldComponentUpdate 来判断是否需要更新Foo组件
// class Foo extends Component{
//   shouldComponentUpdate(nextProps, nextState){
//     if(nextProps.name === this.props.name){
//       return false;
//     }
//     return true;
//   }
//   render(){
//     console.log('Foo render...');
//     return null;
//   }
// }

//方法二：使用PureComponent 让Foo组件在数据修改后才更新
// class Foo extends PureComponent{
//   render(){
//     console.log('Foo render...');
//     return null;
//   }
// }

//方法三: memo 用于函数式组件
const Foo = memo(function Foo(props) {
  console.log('Foo render...');
  return <div>{props.person.age}</div>;
})



class App extends Component {

  state = {
    count: 0,
    person: {
      age: 1
    }

  }

  callback = () => { //将callback写成类组件，绑定this

  }

  render() {
    const person = this.state.person
    return (
      <div>
        <button onClick={() => {
          person.age++;
          this.setState({ person })  //这一句加上后Foo组件不会触发更新
        }}>修改</button>

        {/* <Foo name = "Mike" ></Foo> */}

        {/* 这一句加上后Foo组件会触发更新，因为每次cb都创建了一个新函数 */}
        {/* <Foo name = "Mike" cb = { ()=> {}} ></Foo> */}


        {/* 这一句加上后Foo组件不会触发更新*/}
        {/* <Foo name = "Mike" cb = { this.callback} ></Foo> */}

        {/* memo */}
        <Foo person={person} ></Foo>
      </div>
    );
  }
}


export default App;
