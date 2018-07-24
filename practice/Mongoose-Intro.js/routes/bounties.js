const express = require("express");
const Bounty = require("../modles/bounties")

const bountiesRouter = express.Router();

bountiesRouter.route("/")
    .get((req, res) => {
        Bounty.find({}, (err, bounties) => {
            return err ? res.status(500).send(err) : res.status(200).send(bounties);
        })
    })
    .post((req, res) => {
        //turn into mongoose document first
        const newBounty = new Bounty(req.body)
        //save newly created document to the collection
        newBounty.save(req.body, (err, bounties) => {
            return err ? res.status(500).send(err) : res.status(200).send(req.body);
        })
    })

bountiesRouter.route("/:id")
    .get((req, res) => {
        Bounty.findById(req.params.id, (err, foundBounty) => {
            return err ? res.status(500).send(err) : res.status(200).send(foundBounty);
        })
    })
    .put((req,res) => {
        Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBounty) => {
            return err ? res.status(500).send(err) : res.status(200).send(updatedBounty);
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params.id, (err) => {
            return err ? res.status(500).send(err) : res.status(200).send(updatedBounty);

        })
    })

module.exports = bountiesRouter;
