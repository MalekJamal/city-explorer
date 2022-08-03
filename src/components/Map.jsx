import React, { Component } from "react";
import "../components/style/map.css";
import Card from "react-bootstrap/Card";

class Map extends Component {
  render() {
    return (
      <div>
        <img
        id="img"
          variant="top"
          src={this.props.map_src}
          alt={this.props.cityName}
        />
      </div>
    );
  }
}

export default Map;
