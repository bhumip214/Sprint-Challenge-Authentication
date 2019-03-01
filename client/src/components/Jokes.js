import React from "react";
import axios from "axios";
import styled from "styled-components";

const JokesWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const List = styled.div`
  padding: 0 100px;
`;

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const endpoint = "http://localhost:3300/api/jokes";
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        authorization: token
      }
    };
    axios
      .get(endpoint, reqOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  render() {
    return (
      <JokesWrapper>
        <h1> List of Jokes </h1>
        <>
          {this.state.jokes.map(joke => {
            return (
              <List key={joke.id}>
                <h4> {joke.joke} </h4>
                <hr />
              </List>
            );
          })}
        </>
      </JokesWrapper>
    );
  }
}

export default Jokes;
