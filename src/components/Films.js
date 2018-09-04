import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {films: []};

    }

    componentDidMount() {
        axios.get('http://localhost:4000/films')
            .then(response => {
                this.setState({ films: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    tabRow() {
        return this.state.films.map(function(object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Dir.</th>
                            <th>Year</th>
                            <th>Plot</th>
                            <th>Keywords</th>
                            <th>Availability</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}