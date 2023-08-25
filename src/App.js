import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import Movie from "./components/Movie";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjVmMGJlNGU4ZTNlNzE1NjQ4MjJkOWI1ZjJiOTRkYyIsInN1YiI6IjY0ZGYyZjZhNWFiODFhMDExYzJlNzJhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeZUNp2gPXUrUooYoIKdZ8xcenWCvsAZesJ5o9L7KdY",
        },
      };
      await fetch(url, options)
        .then((res) => res.json())
        .then((res) => setMovies(res.results))
        .catch((err) => console.error("error:" + err));
    };
    getData();
  }, [searchQuery]);

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) =>
      movie?.title
        ?.toString()
        ?.toLowerCase()
        ?.includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(newFilteredMovies);
  }, [searchQuery]);

  return (
    <Router>
      <NavBar
        movies={movies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MoviesList movies={searchQuery ? filteredMovies : movies} />
          }
        />
        <Route path="/movie/:id" element={<Movie movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
