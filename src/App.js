import React, { Component } from 'react';
import Nav from "./Nav";
import TaskHandle from "./TaskHandle";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <TaskHandle />
      </div>
    )
  }
}




export default App;
