const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = 8080;
const BOOKS = require("./books.json")
const logger = require('./middleware')

const app = express();
app.use(bodyParser.json())
.use(logger);

app.route("/books")
    .get((req, res) => {
        console.log(req.query)
        res.send(BOOKS.filter(book => {
            for (key in req.query) {
                if(String(book[key]) !== req.query[key]){
                    return false
                }
            }
            return true
        }));
    })
    .post((req, res) => {
        let newBook = req.body;
        newBook._id = uuid();
        BOOKS.push(newBook);
        res.send(newBook);
    });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));