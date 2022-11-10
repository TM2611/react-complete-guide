import React, { useEffect, useState, useCallback } from "react";
import AddMovie from './components/AddMovie';
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-http-20141-default-rtdb.firebaseio.com/movies.json");
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
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{getDynamicContent()}</section>
    </React.Fragment>
  );
}

export default App;
