import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';

console.log("Proptypes:",PropTypes);
function App(props) {
  console.log('App component props:',props);
  return (
    <div className="App">
      <header className="App-header">
        <ParentComp/>
      </header>
    </div>
  );
}

/** ------ Example of using props in Class component ---- */
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propObject: {
    obj1: "I am obj 1!!!",
    obj2: "I am obj 2!!!",
    obj3: "I am obj 3!!!"
  },
  propString: 'I am a String prop!!',
  propNumber: 2022
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
