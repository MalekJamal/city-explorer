import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
class ErrorAlert extends Component {
  render() {
    return (
      <div>
        <Alert variant="danger">
          <Alert.Heading>{this.props.errorMessage} </Alert.Heading>
          <hr />
          <h3>Try Again!!</h3>
        </Alert>
      </div>
    );
  }
}

export default ErrorAlert;
