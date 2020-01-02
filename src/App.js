import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//a class component allows you to display dinamic content
class App extends Component {
  //state === object with properties that can br accesed from anywhere within the class
  constructor() {
    // super calls the crostructor method on the component and give us access to this state
    super();
      this.state = {
        string: "Hello Ivandcs"
      };
  }
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { this.state.string }
        </p>
        <button onClick={() => this.setState({ string: "Hello Carrillo" })}>
          Change Text
        </button>
      </header>
    </div>
    );
  }
}

export default App;
