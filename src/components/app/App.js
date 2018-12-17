import React, { Component } from 'react';
import { Title } from '../title/Title';
import { SearchForm } from '../searchform/SearchForm';
import { MoviesList } from '../movieslist/MoviesList';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      usedSearch: false
    }
  }

  _handleResults = (movies) => {
    this.setState({
      movies,
      usedSearch: true
    });
  }

  _renderMovies() {
    return this.state.movies.length === 0
      ? <p>Sorry! <span role="img" aria-label="sheep">😟</span> Results  not found!</p>
      : <MoviesList movies={this.state.movies} />
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="searchform-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderMovies()
          : <small>Use the form to search a movie</small>
        }
      </div>
    );
  }
}

export default App;

  /**
   * Con arrow functions nos ahorramos tener que hacer el bind
   */
