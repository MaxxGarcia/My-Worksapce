const express = require("express");
const bodyParser = require("body-parser");
const uuid = require('uuid')
const PORT = 8080;

const BOUNTIES = [
    {
        firstName: "maxx",
        lastName: "garcia",
        living: false,
        bountyAmount: 100,
        type: "jedi"
    }
]

const app = express();
app.use(bodyParser.json());

app.route("/bounties")
    .get((req, res) => {
        res.send(BOUNTIES);
    })
    .post((req, res) => {
        let newBounty = req.body;
        newBounty._id = uuid();      
        BOUNTIES.push(newBounty);
        res.send(newBounty);
    });

app.route("/bounties/:id/")
    .get((req, res) => {
        let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
        res.send(foundBounty);
    })
    .put((req, res) => {
        let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
        for (const key in req.body) {
            foundBounty [key] = req.body[key]
        }
        res.send(foundBounty);
    })
    .delete((req, res) => {
        let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
        BOUNTIES.splice(BOUNTIES.indexOf(foundBounty))
        res.send("Bounty ELMINATED Forever")
    })  

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));