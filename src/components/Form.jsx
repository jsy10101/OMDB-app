import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search for movies, shows..."
        onChange={handleChange}
        name="inputText"
        value={inputText}
      />
      <button onClick={props.getMovies}>Search</button>
    </form>
  );
}
