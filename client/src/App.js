import React, { Component } from "react";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
