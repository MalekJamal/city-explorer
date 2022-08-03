import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div style={{marginBottom:55}}>
        {
        this.props.weatherInfo.map((item,idx) => (
          <h1 key={idx}>
            {item.date} :<br></br><h3>{item.descrption}</h3><hr />
          </h1>
        ))}
      </div>
    );
  }
}

export default Weather;
