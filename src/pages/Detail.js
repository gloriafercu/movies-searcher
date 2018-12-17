import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/buttonbacktohome/ButtonBackToHome';

const API_KEY = 'b78ef358';

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  _fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(movie => {
        console.log(movie)
        this.setState({
          movie
        });
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Plot, imdbRating, Year } = this.state.movie;
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h2 className="modal-card-title">{Title} <span>{Year ? `(${Year})` : ''}</span></h2>
            <ButtonBackToHome />
          </header>
          <section className="modal-card-body">
            <div className="media-left">
              <figure className="image">
                <img className="image-details" src={Poster} alt={Title} />
              </figure>
            </div>
            <div className="media-content">
              <h2 className="media-actors">{Actors ? `Actors: ${Actors}` : ''}</h2>
              <p className="media-description">{Plot ? `Description: ${Plot}` : ''}</p>
              <p className="media-rating">
                {imdbRating ?
                  <span className="icon is-small">
                    <i className="fas fa-star"></i>
                    Rating: {imdbRating}
                  </span> :
                  ''
                }
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
