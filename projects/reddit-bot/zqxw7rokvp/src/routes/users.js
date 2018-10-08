const Users = require("../models/users");
const express = require("express");
const userRoutes = express.Router();

userRoutes.route("/")
    .get((req,res) => {
        Users.find((err, users) => {
            return rerr ? res.status(500).send(err) : res.status(200).send(users)
        })
    })

userRoutes.route("/:id")
    .get((rep, res) => {
        Users.findById(req.params.id, (err, foundUser) => {
            return err ? res.status(500).send(err) : res.status(200).send(foundUser)
        })
    })