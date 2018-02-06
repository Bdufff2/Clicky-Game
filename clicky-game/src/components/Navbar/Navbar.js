import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  // Setting the initial values of this.state.username and this.state.password

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>
                    </li>
                    <li>Click an image to begin!</li>
                    <li className="scoreboard">
                        <p>Score: {this.props.score} | TopScore: {this.props.topScore}</p>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
