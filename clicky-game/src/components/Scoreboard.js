import React, { Component } from "react";

class Scoreboard extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    score: 0,
    topScore: 0
  };
  shouldComponentUpdate() {
    return (this.score);

  }

  render() {
    return ("this is the scoreboard");
  }
}

export default Scoreboard;