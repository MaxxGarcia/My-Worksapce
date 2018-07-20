const express = require("express");
const bodyParser = require("body-parser");
// const uuid = require("uuid");
const PORT = 8080;

const logger = require("./middleware");

const app = express();
app.use(bodyParser.json())
app.use(logger)
app.use('/movies', require("./routes/movies"))
// .use('./actors', require("./routes/actor"))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));