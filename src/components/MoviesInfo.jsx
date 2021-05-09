import React from "react";
import "./MoviesInfo.css";
import NoMatches from "./NoMatches";

export default function MoviesInfo(props) {
  return props.response ? (
    <div className="container">
      {props.movies.map((movie, i) => {
        return (
          <div className="card" key={i}>
            <div className="overflow">
              <img
                className="card-img-top"
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "assets/no-img.jpeg"
                }
                alt={movie.Title}
              />
            </div>
            <p>
              {movie.Title.length <= 21
                ? movie.Title
                : movie.Title.substr(0, 21) + " ..."}
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <NoMatches q={props.query} />
  );
}
