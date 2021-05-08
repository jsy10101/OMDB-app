import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MoviesInfo from "./components/MoviesInfo";
import Footer from "./components/Footer";

function App() {
  const [response, setResponse] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async (event) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&`;

    const searchQuery = event.target.form[0].attributes[3].value.replaceAll(
      " ",
      "+"
    );
    console.log(url + "s=" + searchQuery);
    const json_data = await fetch(url + "s=" + searchQuery);
    const data = await json_data.json();
    setMovies(data.Search);
    setResponse(() => (data.Response === "True" ? true : false));
  };

  const resetResponse = () => {
    // resetting the response when the previous search result has been processed
    setResponse(false);
    console.log("response has been reset to false");
  };

  return (
    <div className="App">
      <div className="App-content">
        <div className="Header">
          <header>OMDB App</header>
        </div>
        <Form searchQuery getMovies={getMovies} />
        <MoviesInfo
          response={response}
          movies={movies}
          resetResponse={resetResponse}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
