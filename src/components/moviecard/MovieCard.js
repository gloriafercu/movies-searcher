import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  };

  render() {
    const { id, poster, title, year } = this.props;

    return (
      <Link to={`/detail/${id}`} className="card link">
        <div className="card-image">
          <figure className="image">
            <img src={poster} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4 is-centered">{title}</p>
              <p className="subtitle is-5 is-centered">{year}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
