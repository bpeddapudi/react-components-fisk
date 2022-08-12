import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComp/>
      </header>
    </div>
  );
}

class ParentComp extends Component {  
  render() {
    const tomsFriends = ['Nikhil','Tommy','Alan','Thomas'];
    return (
      <div>
        <h2>I am parent component</h2>
        <Kid kidName="Tom" friends={tomsFriends}/>
      </div>
    )
  }
}


class Kid extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>I am child comp: <strong>{this.props.kidName}</strong></h3>
        <p>
          {
            this.props.friends.map((friend, i) => {
              return friend+"-";
            })
          }
          </p>
      </div>
    )
  }
}

export default App;
