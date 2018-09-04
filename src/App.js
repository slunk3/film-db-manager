import React, { Component } from 'react';
import Create from './components/Create';
import Films from './components/Films';
import SearchFilm from './components/SearchFilm';


class App extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      filmDetails: {},
    };

    this.getFilmDetails = this.getFilmDetails.bind(this);
  }

  getFilmDetails(film) {
    this.setState((prevState) => ({
      filmDetails: film
    }));
  }

  render() {
    return (
      <div>
        <SearchFilm filmDetails={this.getFilmDetails} />
        <Create filmDetails={this.state.filmDetails} />
        <Films />
      </div>
    );
  }
}

export default App;
