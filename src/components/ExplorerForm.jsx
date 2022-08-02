import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/style/form.css";
import axios from "axios";
import Main from "./Main";
import ErrorAlert from "./ErrorAlert";

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
    };
  }

  //${process.env.REACT_APP_CITY_EXPLORER}
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cityData = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${event.target.userCityInput.value}&format=json`
      );
      this.setState({
        userInput: event.target.userCityInput.value,
        displayName: cityData.data[0].display_name,
        longitude: cityData.data[0].lon,
        latitude: cityData.data[0].lat,
        displayError: false,
      });
    } catch (error) {
      this.setState({
        errorMessage: error.message + ", " + error.response.data.error,
        displayError: true,
        displayName: "",
      });
      console.log(error);
    }
  };
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
          {this.state.displayName && (
            <>
              <Main
                displayName={this.state.displayName}
                longitude={this.state.longitude}
                latitude={this.state.latitude}
                map_src={`https://maps.locationiq.com/v3/staticmap?key=pk.ec64b44d18c0b5a74fa4adf73f1d783e&center=${this.state.latitude},${this.state.longitude}&zoom=10`}
                city={this.state.displayName}
              />
            </>
          )}
        </Form>
        {this.state.displayError && (
          <ErrorAlert errorMessage={this.state.errorMessage} />
        )}
      </div>
    );
  }
}

export default ExplorerForm;
