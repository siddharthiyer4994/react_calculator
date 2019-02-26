import React, { Component } from 'react';
import Calculator from './components/Calculator'
class App extends Component {
  render() {
    const appStyle ={
      textAlign:"center"
    }

    const contentStyle= {
     margin: 'auto'
    }
    return (
      <div className="App" style={appStyle}>
        <h2 > Calculator App</h2>
        <Calculator style={contentStyle}/>
      </div>
    );
  }
}

export default App;