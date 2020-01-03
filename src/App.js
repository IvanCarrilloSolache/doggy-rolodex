import React, { Component } from 'react';
import './App.css';

//a class component allows you to display dinamic content
class App extends Component {
  //state === object with properties that can br accesed from anywhere within the class
  constructor() {
    // super calls the crostructor method on the component and give us access to this state
    super();
      this.state = {
        doggies: []
      };
  }
  //renders component into dom/calls block of code
  componentDidMount() {
    //returns a promise
    fetch("https:jsonplaceholder.typicode.com/users")
      //returns response in json format for JS to understand
      .then(response => response.json())
      //returns new promise with body of users array/updates doggiesproperty with users array
      .then(users => this.setState({ doggies: users }));
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
