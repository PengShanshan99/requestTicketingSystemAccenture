import React, { Component } from "react";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 style={{color: 'green'}}>Unsolved Requests</h3>
        <ToDoList />
        <h3 style={{color: 'green'}}>Solved Requests</h3>
        <h5>Oops, solve your first request ticket!</h5>
      </div>
    );
  }
}

export default App;
