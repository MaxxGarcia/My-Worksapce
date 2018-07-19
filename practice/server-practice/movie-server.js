const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;

const MOVIES = [];

const app = express();
app.use(bodyParser.json());

app.route("/movies")
    .get((req, res) => {
        res.send(MOVIES);
    })
    .post((req, res) => {
        //save new movie
        let newMovie = req.body;
        //give it an id
        newMovie._id = uuid();
        // 'save' to our database
        MOVIES.push(newMovie);
        //send movie back
        res.send(newMovie);
    });

app.route("/movies/:id/")
    .get((req, res) => {
        let foundMovie = MOVIES.find(movie =>  movie._id === req.params.id);
        res.send(foundMovie);
    })
    .put((req, res) => {
        let foundMovie = MOVIES.find(movie =>  movie._id === req.params.id);
        for (const key in req.body) {
            foundMovie[key] = req.body[key]
        }
        res.send(foundMovie);

    })
    .delete((req, res) => {
        let foundMovie = MOVIES.find(movie =>  movie._id === req.params.id);
        MOVIES.splice(MOVIES.indexOf(foundMovie))
        res.send("Movie Deleted Forever")
    })



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));