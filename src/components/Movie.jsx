import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Movie extends React.Component {
  render() {
    return (
      <div style={{ display: "inline-flex" }}>
        <Row xs={0} md={4} className="g-4">
          <Col>
            <Card
              style={{
                width: "18rem",
                height: "100%",
                borderRadius: "10px",
                border: "solid #000",
                margin: "10px 20px",
              }}
              key={this.props.movieData.idx}
            >
              <Card.Img
                variant="top"
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  this.props.movieData.image_url
                }
                title={this.props.movieData.title}
                alt={this.props.movieData.title}
              />

              <Card.Body>
                <Card.Title>{this.props.movieData.title}</Card.Title>
                <Card.Text>{this.props.movieData.overview}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Popularity: {this.props.movieData.popularity}
                </ListGroup.Item>
                <ListGroup.Item>
                  Release Date: {this.props.movieData.released_on}
                </ListGroup.Item>
                <ListGroup.Item>
                  Average Votes: {this.props.movieData.average_votes}
                </ListGroup.Item>
                <ListGroup.Item>
                  Total Votes: {this.props.movieData.total_votes}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Movie;
