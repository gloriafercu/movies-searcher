import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = 'b78ef358';

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }
  static propTypes = {
    id: PropTypes.string
  }

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(movie => {
        this.setState({
          movie
        });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    const { id } = this.props;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button onClick={this._goBack}>Back</button>
        <h2>{Title}</h2>
        <img src={Poster} alt={Title} />
        <h2>{Actors}</h2>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
