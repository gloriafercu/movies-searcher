import React, { Component } from "react";

const API_KEY = "b78ef358";

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMovie: ""
    };
  }

  _handleChange = e => {
    this.setState({
      inputMovie: e.target.value
    });
  };
  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(response => response.json())
      .then(movies => {
        const { Search = [] } = movies;
        console.log({ Search });
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Movie to search..."
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-danger">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

/**
 
 *  Creamos la funcion _handleOnSubmit y le pasamos e.preventDefault para prevenir que el formulario se comporte como lo hace siempre por defecto
 *  Cuando hacemos submit en el formulario estamos haciendo una peticion a la API
 *  Como el botón del formulario no tiene especificado el tipo por defecto es de type="submit"
 *  Con destructuring extraemos propiedades del objeto que se obtiene cuando se hace la petición de la API
 *  En la petición extraemos las propiedades del objeto Search y totalResults, aprovechamos la propiedad Search para ejecutar el método onResults que nos llega como props(this.props.onResults(Search)) que es el método que actualizara el estado de nuestro componente App (_handleMovies)
 */
