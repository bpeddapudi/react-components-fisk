import React, { Component } from 'react'

export default class MyClassComponent extends Component {
  capitalizeString = (stringIn) => stringIn.toUpperCase();
  render() {
    return (
      <div>
        <h2>I am a class component</h2>
        <p>Capitalized String:{this.capitalizeString('Some random text')}</p>
      </div>
    )
  }
}
