const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Universe = require("./models/universes");

const PORT = 8080;
const MONGODB_URI = "mongodb://localhost:27017/universe";

const app = express();

app.use(bodyParser.json());

app.route("/universes")
    .get((req, res) => {
        Universe.find((err, universes) => {
            res.status(200).send(universes);
        })
    })
    .post((req, res) => {
        let newUniv = new Universe(req.body);
        newUniv.save((err, unv) =>
            res.status(201).send(unv));
    })
app.route("/universes/:id")
    .put((req, res) => {
        Universe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUniv) => {
            res.status(200).send(updatedUniv);
        })
    })

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then((db) => console.log("Connected to DB"))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log("Connected to server"));