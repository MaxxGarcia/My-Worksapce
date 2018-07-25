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
        newUniv.save((err, unv) =>{
        return err ? res.status(500).send(err) : res.status(201).send(unv)
        })
    })

universeRoutes.route("/:id")
    .get((req, res) => {
        Universe.find((err, universes) => {
            return err ? res.status(500).send(err) : res.status(200).send(universes);
        })
    })
    .put((req, res) => {
        Universe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUniverse) => {
            return err ? res.status(500).send(err) : res.status(200).send(updatedUniverse);
        })
    })
    .delete((req,res) => {
        Universe.findById(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send("YOU GOT IT DUDE");
        })
    })

universeRoutes.route("/:name/galaxies")
    .get((req, res) => {
        Universe.find((err, universe) => {
            console.log(universe)
            return err ? res.status(500).send(err) : res.status(200).send(universe[0]._id);
        })
    })
    .put((req, res) => {
        Universe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUniverse) => {
            return err ? res.status(500).send(err) : res.status(200).send(updatedUniverse);
        })
    })
    .delete((req,res) => {
        Universe.findById(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send("YOU GOT IT DUDE");
        })
    })

    module.exports = universeRoutes;