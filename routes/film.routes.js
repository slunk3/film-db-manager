const express = require('express');
const app = express();
const FilmRouter = express.Router();

const FilmModel = require('../models/film.model');

FilmRouter.route('/add').post((req, res) => {
    const film = new FilmModel(req.body);
    
    film.save()
        .then(film => {
            res.json('Film added successfully');
        })
        .catch(err => {
            res.status(400).send('unable to save to db');
        });
});

FilmRouter.route('/').get((req, res) => {
    FilmModel.find(function(err, films) {
        if(err) {
            console.log(err);
        } else {
            res.json(films);
        }
    });
});

module.exports = FilmRouter;