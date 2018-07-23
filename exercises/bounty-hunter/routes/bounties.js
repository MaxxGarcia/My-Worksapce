const express = require("express");
const bountyRoutes = express.Router();
const uuid = require('uuid')


const BOUNTIES = [
    {
        firstName: "maxx",
        lastName: "garcia",
        living: false,
        bountyAmount: 100,
        type: "jedi"
    }
];

bountyRoutes.route("/")
    .get((req, res) => {
        res.status(200).send(BOUNTIES);
    })
    .post((req, res) => {
        let newBounty = req.body;
        newBounty._id = uuid();      
        BOUNTIES.push(newBounty);
        res.status(201).send(newBounty);
    });

bountyRoutes.route("/:id")
    .get((req, res) => {
        let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
        res.status(200).send(foundBounty);
    })
    .put((req, res) => {
        let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
        for (const key in req.body) {
            foundBounty [key] = req.body[key]
        }
        res.status(202).send(foundBounty);
    })
    .delete((req, res) => {
        let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
        BOUNTIES.splice(BOUNTIES.indexOf(foundBounty))
        res.status(202).send("Bounty ELMINATED Forever")
    })

module.exports = bountyRoutes