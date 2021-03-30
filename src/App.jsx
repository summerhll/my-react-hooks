import React, { Component } from 'react';
import './App.css';

const BatteryContext = React.createContext(60);


class Leaf extends Component {
  static contextType = BatteryContext;
  
  render() {
    const battery = this.context;
    return (
      <h1> Battery : {battery}</h1>
      // <BatteryContext.Consumer>
      //   { battery => <h1> Battery : {battery}</h1> }
      // </BatteryContext.Consumer>
    );
  }
}
class Middle extends Component {
  render() {
    return <Leaf />
  }
}
class App extends Component {
  state = {
    battery: 60,
    
  }
  render() {
    const { battery } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
          <button type="button" onClick={() => this.setState({ battery: battery - 1 })}> 减少</button>
         
          <Middle />
      </BatteryContext.Provider>
    )
  }
}


export default App;
