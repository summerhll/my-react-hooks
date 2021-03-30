import React, { Component } from 'react';

import './App.css';

const BatteryContext = React.createContext(60);
const OnlineContext = React.createContext();

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        { battery => 
        (
          <OnlineContext.Consumer>
            { online => <h1> Battery : {battery}, Online : {String(online)},  </h1>}

          </OnlineContext.Consumer>
        )
       }
      </BatteryContext.Consumer>

      
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
    online: false
  }
  render() {
    const { battery, online } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
           <button type="button" onClick={() => this.setState({ battery: battery - 1 })}> 减少</button>
           <p></p>
          <button type="button" onClick={() => this.setState({ online: !online })}> 取反</button> 
      
         
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>


    )
  }

}


export default App;
