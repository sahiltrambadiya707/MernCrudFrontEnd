import React, { Component } from "react";
import Main from "./components/Main";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Home />      
        <Main />
      </div>
    );
  }
}

export default App;
