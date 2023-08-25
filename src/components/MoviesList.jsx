import React from "react";
import classes from "./moviesList.module.css";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        textDecoration: "none",
      }}
    >
      {Array.isArray(movies) &&
        movies.map((movie) => (
          <Link
            key={movie?.id}
            className={classes.container}
            to={`/movie/${movie.id}`}
          >
            <div className={classes.main}>
              <img
                className={classes.poster}
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                alt={movie.title}
              />
              {/* </div> */}
              <div style={{ width: "100%", height: "15px" }}>
                <p className={classes.title}>
                  {movie.title.length < 10
                    ? movie.title
                    : movie.title.slice(0, 10) + "..."}
                </p>
                <p className={classes.rating}>({movie.vote_average})</p>
              </div>
              <p className={classes.description}>
                {movie?.overview?.slice(0, 30) + "..."}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
