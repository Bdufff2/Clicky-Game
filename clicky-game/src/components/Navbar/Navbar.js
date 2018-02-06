import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  // Setting the initial values of this.state.username and this.state.password

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="row">
            <div className="container-fluid">
                <div className="col-md-4">
                    <div className="navbar-header" align-text="center">
                        <a className="brand" href="/">Clicky Game</a>
                    </div>
                </div>    
                <div className="col-md-4"> 
                    <p>Click an image to begin!</p>
                </div>   
                <div className="col-md-4">      
                    <p>Score: {this.props.score} | TopScore: {this.props.topScore}</p>
                </div>
            </div>
            
        </div>
      </nav>
    )
  }
}

export default Navbar;
