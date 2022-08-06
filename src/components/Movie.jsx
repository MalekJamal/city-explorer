import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Movie extends React.Component {
  render() {
    return (
      <>
        <Row xs={0} md={4} className="g-4">
          {this.props.moviesData.map((item, idx) => (
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderRadius: "10px",
                  border: "solid #000",
                  margin: "10px 20px",
                }}
                key={idx}
              >
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500/" + item.image_url}
                  title={item.title}
                  alt={item.title}
                />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.overview}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Popularity: {item.popularity}</ListGroup.Item>
                  <ListGroup.Item>
                    Release Date: {item.released_on}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Average Votes: {item.average_votes}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Total Votes: {item.total_votes}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Movie;
