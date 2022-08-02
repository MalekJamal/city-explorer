import React, { Component } from "react";
import NavBar from "./NavBar";

class Header extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>{process.env.REACT_APP_HEADER}</h1>
      </div>
    );
  }
}

export default Header;
