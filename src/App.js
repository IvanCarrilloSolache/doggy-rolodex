import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css';

//class component allows you to display dynamic content
class App extends Component {
  //state => object with properties that can br accesed from anywhere within the class
  constructor() {
    //super calls the crostructor method on the component and give us access to this state
    super();
      this.state = {
        robots: [],
        searchField: ""
      }; 
  }
  //renders component into dom/calls block of code
  componentDidMount() {
    //returns a promise/fetch users from API
    fetch("https:jsonplaceholder.typicode.com/users")
      //returns response in json format for JS to understand
      .then(response => response.json())
      //returns new promise with body of users arr/updates robots property with users arr
      .then(users => this.setState({ robots: users }));
  }
  
  render () {
    //distructuring allows to pull properties off of state/set them to constants inside bracket notation
    const { robots, searchField } = this.state;
    //filter method gets a new arr based on passed in function 
    const filteredRobots = robots.filter(robot =>
      //toLowecase allows search not to be caseSensative/includes checks string value is in the called string 
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {/*onChange fires syncteric event (e) when input value is change*/ }
      
        <SearchBox 
          placeholder="search robots"
          /*setState is asynchronous, a second argument function allows to get response right after setting state*/          
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        {/*props => parameter pass in CardList/logs out object of properties into component*/}
        <CardList robots={filteredRobots} /> 
      </div>
    );
  }
}

export default App;
