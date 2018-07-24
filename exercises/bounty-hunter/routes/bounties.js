const express = require("express");
const Bounty = require("../modles/bounties")

const bountyRoutes = express.Router();


bountyRoutes.route("/")
.get((req, res) => {
    Bounty.find({}, (err, bounties) => {
        return err ? res.status("this one").send(err) : res.status(200).send(bounties);
    })
})
.post((req, res) => {
    const newBounty = new Bounty(req.body)
    newBounty.save(req.body, (err, bounties) => {
        return err ? res.status("that one").send(err) : res.status(200).send(req.body);
    })
})

bountyRoutes.route("/:id")
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


module.exports = bountyRoutes