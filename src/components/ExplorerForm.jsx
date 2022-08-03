import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/style/form.css";
import axios from "axios";
import Main from "./Main";
import ErrorAlert from "./ErrorAlert";
import Weather from "./Weather";

class ExplorerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      allCity: {},
      map: {},
      displayName: "",
      longitude: "",
      latitude: "",
      errorMessage: "",
      displayError: false,
      weather:[],
      isWeather:false
    };
  }

  //${process.env.REACT_APP_CITY_EXPLORER}
  handleSubmit = async (event) => {
    event.preventDefault();

    const searchQuery = event.target.userCityInput.value;
    const url =   `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${event.target.userCityInput.value}&format=json`;
    
    try {
      const cityData = await axios.get(url);
      this.setState({
        userInput: event.target.userCityInput.value,
        displayName: cityData.data[0].display_name,
        longitude: cityData.data[0].lon,
        latitude: cityData.data[0].lat,
        displayError: false,
      });
      this.displayWeather(searchQuery,cityData.data[0].lat,cityData.data[0].lon);
      //console.log(searchQuery)
    } catch (error) {
      this.setState({
        errorMessage: error.message + ", " + error.response.data.error,
        displayError: true,
        displayName: "",
        
      });
     
    }
  };

  displayWeather= async (searchQuery, lat, lon)=>{
    
    try {
      const weatherData = await axios.get(`${process.env.REACT_APP_SERVER_PORT}searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`)
      this.setState({
      isWeather:true,
      weather: weatherData.data,
      
      
      
    })

    } catch (error) {
      this.setState({
        errorMessage:error.message + ", " + error.response.data.error,
        displayError: true,
        isWeather: false,
        displayName:""
      })
    }
  }

  render() {
    return (
      <div className="div-form">
        <Form onSubmit={this.handleSubmit} id="formb">
          <Form.Group className="mb-3">
            <Form.Label id="leable">Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City Name"
              id="userCityInput"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Explorer
          </Button>
          </Form>

          {this.state.displayName && (
            <>
              <Main
                displayName={this.state.displayName}
                longitude={this.state.longitude}
                latitude={this.state.latitude}
                map_src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.latitude},${this.state.longitude}&zoom=15`}
                city={this.state.displayName}
              />
            </>
          )}
          {
            this.state.isWeather &&

            <Weather weatherInfo={this.state.weather} />
          }
        
        {this.state.displayError && (
          <ErrorAlert errorMessage={this.state.errorMessage} />
        )}
      </div>
    );
  }
}

export default ExplorerForm;
