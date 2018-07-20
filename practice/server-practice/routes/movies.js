const express = require("express");
const movieRoutes = express.Router();
const uuid = require("uuid");

const MOVIES = require("../movies.json");

movieRoutes.get("/", (req, res) => {
        console.log(req.query)
        res.send(MOVIES.filter(movie => {
            for (key in req.query) {
                if(String(movie[key]) !== req.query[key]){
                    return false
                }
            }
            return true
        }))
    })
    .post("/", (req, res) => {
        //save new movie
        let newMovie = req.body;
        //give it an id
        newMovie._id = uuid();
        // 'save' to our database
        MOVIES.push(newMovie);
        //send movie back
        res.send(newMovie);
    });

movieRoutes.get("/:id", (req, res) => {
        let foundMovie = MOVIES.find(movie =>  {movie._id === req.params.id});
        res.send(foundMovie);
    })
    .put("/:id", (req, res) => {
        let foundMovie = MOVIES.find(movie =>  movie._id === req.params.id);
        for (const key in req.body) {
            foundMovie[key] = req.body[key]
        }
        res.send(foundMovie);

    })
    .delete("/:id", (req, res) => {
        let foundMovie = MOVIES.find(movie =>  movie._id === req.params.id);
        MOVIES.splice(MOVIES.indexOf(foundMovie))
        res.send("Movie Deleted Forever")
    })

    module.exports = movieRoutes; 