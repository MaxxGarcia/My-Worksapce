const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json())
    .use('/api/universes', require("./routes/universes"))
    .use(express.static(path.join(__dirname, "client", "build")))


mongoose.connect(process.env.MONGODB_URI)
    .then((db) => console.log("Connected to DB"))
    .catch(err => console.error(err));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})
    .use((err, req, res, next) => {
        res.status(400).send(err)
    })

app.listen(PORT, () => console.log(`Connected to server ${PORT}`));