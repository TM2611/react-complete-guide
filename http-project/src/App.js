import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      const data = await response.json();

      const formattedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date,
        };
      });
      setMovies(formattedMovies);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }

  const getDynamicContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (movies.length > 0) {
      return <MoviesList movies={movies} />;
    }
    if (error) {
      return <p>{error}</p>;
    }
    return <p> No movies found</p>;
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{getDynamicContent()}</section>
    </React.Fragment>
  );
}

export default App;
