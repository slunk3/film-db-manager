import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const details = this.props.filmDetails;
        
        const film = {
            title: details.Title,
            year: this.props.filmDetails.Year,
            lang: this.props.filmDetails.Language,
            runtime: this.props.filmDetails.Runtime,
            director: this.props.filmDetails.Director,
            writer: this.props.filmDetails.Writer,
            actors: this.props.filmDetails.Actors,
            plot: this.props.filmDetails.Plot,
            poster: this.props.filmDetails.Poster,
        }

        axios.post('http://localhost:4000/films/add', film)
            .then(res => console.log(res.data));

    }

    render() {
        const film = this.props.filmDetails;

        return (
            <div style={{marginTop: 50}} className="container">
                <em>Add New Film</em>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="Add Film to DB" className="btn btn-primary" />
                    </div>
                    <div className="row">
                        <div className="input-field s8 col">
                            <input type="text" className="form-control" value={film.Title || ''} />
                            <div className="row">
                                <div className="col s3 input-field">
                                    <input type="text" value={film.Year || ''} readOnly />
                                </div>
                                <div className="col s3 input-field">
                                    <input type="text" value={film.Language || ''} readOnly />
                                </div>
                                <div className="col s3 input-field">
                                    <input type="text" value={film.Country || ''} readOnly />
                                </div>
                                <div className="col s3 input-field">
                                    <input type="text" value={film.Runtime || ''} readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 input-field">
                                    <input type="text" value={film.Plot || ''} readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6 input-field">
                                    d. <input type="text" value={film.Director || ''} readOnly />
                                </div>
                                <div className="col s6 input-field">
                                    w. <input type="text" value={film.Writer || ''} readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 input-field">
                                    <input type="text" value={film.Actors || ''} readOnly />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 input-field">
                                    <input type="text" placeholder="keywords" value={film.Keywords || ''} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6 input-field">
                                    <input type="text" placeholder="availability" value={film.availability || ''} />
                                </div>
                                <div className="col s6 input-field">
                                    <input type="text" placeholder="cost" value={film.cost || '0.00'} />
                                </div>
                            </div>
                        </div>
                        <div className="input-field s4 col">
                            <img src={film.Poster || ''} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Create.propTypes = {
    filmDetails: PropTypes.object
}