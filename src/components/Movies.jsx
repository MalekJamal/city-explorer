import React from "react";
import Movie from "./Movie";
class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.moviesData.map((item, idx) => (
          <Movie movieData={item} index={idx} />
        ))}
      </>
    );
  }
}

export default Movies;
