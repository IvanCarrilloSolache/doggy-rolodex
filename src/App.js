import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import './App.css';

//class component allows you to display dynamic content
class App extends Component {
  //state => object with properties that can br accesed from anywhere within the class
  constructor() {
    //super calls the crostructor method on the component and give us access to this state
    super();
      this.state = {
        monsters: []
      }; 
  }
  //renders component into dom/calls block of code
  componentDidMount() {
    //returns a promise/fetch users from API
    fetch("https:jsonplaceholder.typicode.com/users")
      //returns response in json format for JS to understand
      .then(response => response.json())
      //returns new promise with body of users arr/updates monsters property with users arr
      .then(users => this.setState({ monsters: users }));
  }
  
  render () {
    return (
      <div className="App">
        {/*props => parameter pass in CardList/logs out object of properties into component*/}
        <CardList monsters={this.state.monsters} /> 
      </div>
    );
  }
}

export default App;
