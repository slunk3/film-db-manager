const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 4000;
const cors = require('cors');
const config = require('./DB');
const FilmRouter = require('./routes/film.routes');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected.') },
    err => { console.log('Cannot connect ot the database, ' + err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/films', FilmRouter);

app.listen(PORT, function(){ 
    console.log('Server is running on Port: ', PORT);
});