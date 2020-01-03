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
        doggies: [
          {
            name: "Wooca",
            id: "1"
          },
          {
            name: "Sushi",
            id: "1"
          },
          {
            name: "Surimmi",
            id: "1"
          }
        ]
      };
  }
  render () {
    return (
      <div className="App">
        {this.state.doggies.map(monster => (
          <h1 key={monster.name}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
