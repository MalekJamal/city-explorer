import React, { Component } from "react";
import Card from "react-bootstrap/Card";
class Weather extends Component {
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
          <h4>The Weather Next Days</h4>
          {this.props.weatherInfo &&
            this.props.weatherInfo.map((item, idx) => (
              <>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Text>
                    {item.date} &gt;&gt;&gt; {item.descrption}
                  </Card.Text>
                </Card.Body>
              </>
            ))}
        </Card>
      </div>
    );
  }
}

export default Weather;
