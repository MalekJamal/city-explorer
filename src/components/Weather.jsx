import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
class Weather extends Component {
  render() {
    return (
      <div style={{ margin: "auto", display: "inline" }}>
        <h4>The Weather Next Days</h4>
        {this.props.weatherInfo.map((item) => (
          <WeatherDay dailyData={item} />
        ))}
      </div>
    );
  }
}

export default Weather;
