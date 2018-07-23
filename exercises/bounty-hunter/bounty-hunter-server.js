const express = require("express");
const bodyParser = require("body-parser");
// const uuid = require('uuid')
const PORT = 8080;

// const BOUNTIES = [
//     {
//         firstName: "maxx",
//         lastName: "garcia",
//         living: false,
//         bountyAmount: 100,
//         type: "jedi"
//     }
// ]

const app = express();

app.use(bodyParser.json());
app.use('/bounties', require("./routes/bounties"))

app.use((req, res) => {
    res.status(400).send({message: "Bad Request"})
})

// app.route("/bounties")
//     .get((req, res) => {
//         res.status(200).send(BOUNTIES);
//     })
//     .post((req, res) => {
//         let newBounty = req.body;
//         newBounty._id = uuid();      
//         BOUNTIES.push(newBounty);
//         res.status(201).send(newBounty);
//     });

// app.route("/bounties/:id/")
//     .get((req, res) => {
//         let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
//         res.status(200).send(foundBounty);
//     })
//     .put((req, res) => {
//         let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
//         for (const key in req.body) {
//             foundBounty [key] = req.body[key]
//         }
//         res.status(202).send(foundBounty);
//     })
//     .delete((req, res) => {
//         let foundBounty = BOUNTIES.find(bounty =>  bounty._id === req.params.id);
//         BOUNTIES.splice(BOUNTIES.indexOf(foundBounty))
//         res.status(202).send("Bounty ELMINATED Forever")
//     })  

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));