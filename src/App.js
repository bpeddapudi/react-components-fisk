import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import MyClassComponent from './MyClassComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const sayHi = (name) => `Hello ${name}!!!!!!!!`;    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{sayHi("Bhargav")}</p>
          <MyClassComponent></MyClassComponent>
        </header>
      </div>
    );
  }
}

export default App;