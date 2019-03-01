import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import "./App.css";
import styled from "styled-components";

const NavBAR = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 60px;
  margin-bottom: 20px;
  background-color: black;
`;

const NavLinks = styled.div`
  text-align: center;

  flex: 1;
  a {
    text-decoration: none;
    padding: 30px;
    color: white;
    font-weight: bold;
  }
  a.active {
    color: red;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBAR>
          <NavLinks>
            <NavLink exact to="/Login">
              Login
            </NavLink>
            <NavLink to="/register">Register</NavLink>
          </NavLinks>
        </NavBAR>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/jokes" component={Jokes} />
        </div>
      </div>
    );
  }
}

export default App;
