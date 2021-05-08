import React from "react";
import "./MoviesInfo.css";

export default function MoviesInfo(props) {
  console.log(props.response);
  return props.response ? (
    <div className="container">
      {props.movies.map((movie, i) => {
        return (
          <div className="card" key={i}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <p>No search results</p>
  );
}
