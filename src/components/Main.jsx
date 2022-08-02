import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Map from "./Map";
import "../components/style/main.css";
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Card className="card">
          <Card.Body>
            <Card.Title>{this.props.displayName}</Card.Title>
            <Card.Text>Longitude: {this.props.longitude}</Card.Text>
            <Card.Text>Latitude: {this.props.latitude}</Card.Text>
          </Card.Body>
          <Card.Footer id="card-footer">
            <Map map_src={this.props.map_src} />
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Main;
