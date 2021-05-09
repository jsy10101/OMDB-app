import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./Form.css";

export default function Form(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <form>
      <span className="search-icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search for movies, shows..."
        onChange={handleChange}
        name="inputText"
        value={inputText}
      />
      <button className="invisible-btn" onClick={props.getMovies}></button>
      <span className="clear-icon">
        {inputText !== "" && (
          <button
            onClick={() => {
              setInputText("");
            }}
          >
            <ClearIcon />
          </button>
        )}
      </span>
    </form>
  );
}
