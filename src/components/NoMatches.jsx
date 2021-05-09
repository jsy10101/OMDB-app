import React from "react";
import "./NoMatches.css";

export default function NoMatches(props) {
  return (
    <div className="no-results">
      <p className="no-res-content">
        Your search for "{props.q}" did not find any matches.
        <br />
        Suggestions:
      </p>
      <ul>
        <li>Try different keywords</li>
        <li>Looking for a movie or TV show?</li>
        <li>Try using a movie or TV show title</li>
      </ul>
    </div>
  );
}
