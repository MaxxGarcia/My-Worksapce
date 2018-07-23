const express = require("express");
const bodyParser = require("body-parser");
// const catRoutes = express.Router();
const PORT = 8080;

const app = express();
app.use(bodyParser.json())
app.use('/cats', require("./routes/cats"))


app.listen(PORT, () => console.log(`server running on port ${PORT}`))