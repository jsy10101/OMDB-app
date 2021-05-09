import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MoviesInfo from "./components/MoviesInfo";
import Footer from "./components/Footer";

function App() {
  const [response, setResponse] = useState(true);
  const [movies, setMovies] = useState([]);
  const [q, setQ] = useState("");

  const getMovies = async (event) => {
    event.preventDefault();
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&`;

    const sq = event.target.form[0].attributes[3].value; // search query
    const searchQuery = sq.replaceAll(" ", "+");
    setQ(sq);
    console.log(url + "s=" + searchQuery);
    const json_data = await fetch(url + "s=" + searchQuery);
    const data = await json_data.json();

    // Handling invalid search input
    if (data.Response === "True") {
      setResponse(true);
      setMovies(data.Search);
      setQ("");
    } else {
      setResponse(false);
    }
  };
  // const resetResponse = () => {
  //   // resetting the response when the previous search result has been processed
  //   setResponse(false);
  //   console.log("response has been reset to false");
  // };

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Form searchQuery getMovies={getMovies} />
        <MoviesInfo
          response={response}
          movies={movies}
          // resetResponse={resetResponse}
          query={q}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
