import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            year: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.getFilmDetails = this.getFilmDetails.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleYearChange(event) {
        this.setState({
            year: event.target.value
        });
    }

    getFilmDetails(e) {
        e.preventDefault();

        fetch(`http://omdbapi.com/?apikey=88165bfc&t=${this.state.value}&y=${this.state.year}`)
            .then(r => r.json())
            .then(
                result => {
                    console.log('movie', result);
                    this.props.filmDetails(result);
                },
                error => {
                    this.setState({
                        error
                    });
                }
            );
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <form onSubmit={this.getFilmDetails} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input value={this.state.value}  
                                onChange={this.handleNameChange} type="text" 
                                name="movieName" id="movieName" required 
                                placeholder="Enter movie name..."
                                autoComplete="off" /> 
                        </div>
                        <div className="input-field col s4">
                            <input type="text" value={this.state.year}
                                onChange={this.handleYearChange} placeholder="Movie year..."
                                autoComplete="off" />
                        </div>
                        <div className="col s2">
                            <input type="submit" value="Find movie" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

TableRow.propTypes = {
    filmDetails: PropTypes.func.isRequired
}

export default TableRow;