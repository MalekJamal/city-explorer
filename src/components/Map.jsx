import React, { Component } from "react";
import "../components/style/map.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
class Map extends Component {
  render() {
    return (
      <div>
        <Card.Img
          variant="top"
          src={this.props.map_src}
          alt={this.props.cityName}
        />
      </div>
    );
  }
}

export default Map;
