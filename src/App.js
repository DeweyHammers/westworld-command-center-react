import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

class App extends Component {
  state = {
    hosts: [],
    areas: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/hosts")
      .then((resp) => resp.json())
      .then((json) => this.setState({ hosts: json }));
    fetch("http://localhost:4000/areas")
      .then((resp) => resp.json())
      .then((json) => this.setState({ areas: json }));
  }

  render() {
    return (
      <Segment id="app">
        <WestworldMap areas={this.state.areas} />
        <Headquarters hosts={this.state.hosts} />
      </Segment>
    );
  }
}

export default App;
