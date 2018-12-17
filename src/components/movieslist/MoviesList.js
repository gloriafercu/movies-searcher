import React, { Component } from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../moviecard/MovieCard";

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  };

  render() {
    const { movies } = this.props;
    return (
      <ul className="movies-list">
        {movies.map(movie => {
          return (
            <li className="movies-list-item" key={movie.imdbID}>
              <MovieCard
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
