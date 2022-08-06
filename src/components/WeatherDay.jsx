import React, { Component } from "react";
import Card from "react-bootstrap/Card";
class WeatherDay extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <Card
          style={{
            width: "50%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px",
            border: "solid #000",
          }}
        >
          <>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Text>
                {this.props.dailyData.date} &gt;&gt;&gt;{" "}
                {this.props.dailyData.descrption}
              </Card.Text>
            </Card.Body>
          </>
        </Card>
      </div>
    );
  }
}

export default WeatherDay;
