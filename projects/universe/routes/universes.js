const Universe = require("../models/universes");
const express = require("express");

const universeRoutes = express.Router()


universeRoutes.route("/")
    .get((req, res) => {
        Universe.find((err, universes) => {
            return err ? res.status(500).send(err) : res.status(200).send(universes);
        })
    })
    .post((req, res) => {
        let newUniv = new Universe(req.body);
        newUniv.save((err, universe) =>{
        return err ? res.status(500).send(err) : res.status(201).send(universe)
        })
    })

universeRoutes.route("/:id")
    .get((req, res) => {
        Universe.findById(req.params.id, (err, foundUniverse) => {
            return err ? res.status(500).send(err) : res.status(200).send(foundUniverse);
        })
    })
    .put((req, res) => {
        Universe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUniverse) => {
            return err ? res.status(500).send(err) : res.status(200).send(updatedUniverse);
        })
    })
    .delete((req,res) => {
        Universe.findByIdAndRemove(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send("YOU GOT IT DUDE");
        })
    })

    module.exports = universeRoutes;