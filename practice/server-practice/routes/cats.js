// const catRouter = require('express').Router
const uuid = require("uuid");
const express = require('express');
const catRouter = express.Router()

const CATDATABASE = [
    {
        name: "marshal"
    }

]

catRouter.get("/", (req, res) => {
        res.status(200).send(CATDATABASE)
    })
    .post((req, res) => {
        let newCat = req.body
        newCat._id = uuid();
        res.status(201).send(newCat)
    })

catRouter.get("/:id", (req, res) => {
    res.send()
})
.delete((req, res) => {
    res.send()
})
.put((req, res) => {
    res.send()
})

module.exports = catRouter;