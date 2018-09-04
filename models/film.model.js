const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for FilmSchema
const FilmSchema = new Schema({
    title: String,
    year: Number,
    lang: String,
    runtime: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    poster: String,
    keywords: String,
    availability: String,
    cost: String,

}, {
    collection: 'films-horror'
});

module.exports = mongoose.model('FilmSchema', FilmSchema);