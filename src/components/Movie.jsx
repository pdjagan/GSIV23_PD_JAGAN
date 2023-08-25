import React from "react";
import { useParams } from "react-router-dom";
import classes from "./movie.module.css";

const Movie = ({ movies }) => {
  const { id: selectedMovieId } = useParams();

  const selectedMovie = movies.find(
    (movie) => movie.id === Number(selectedMovieId)
  );
  return !selectedMovie ? (
    <div>No movie selected</div>
  ) : (
    <div>
      <div className={classes.container}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + selectedMovie.poster_path}
          alt="movie"
          className={classes.poster}
        />
        <div className={classes.titleContainer}>
          <div className={classes.titleRating}>
            <h1 className={classes.title}>{selectedMovie.title}</h1>
            <h3 className={classes.rating}>({selectedMovie.vote_average})</h3>
          </div>
          <div className={classes.yld}>{selectedMovie.release_date.split('-').join().slice(0,4)} | Length | Director</div>
          <div className={classes.cast}>Cast: {}</div>
          <div className={classes.description}>
            Description: {selectedMovie.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
