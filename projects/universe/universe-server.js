const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = 8080;
const MONGODB_URI = "mongodb://localhost:27017/universe";
const app = express();

app.use(bodyParser.json())
    .use('/universes', require("./routes/universes"))
    .use((err, req, res, next) => {
        res.status(400).send(err)
    })

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then((db) => console.log("Connected to DB"))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Connected to server ${PORT}`));