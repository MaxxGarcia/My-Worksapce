const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = 8080;

const STORY = {
    characters: {
    }
}

const app = express();
app.use(bodyParser.json())


app.route('/STORY/characters')
    .get((req, res)=> {
        res.send(STORY.characters);
    })
    .post((req, res) => {
        let newCharacter = req.body;
        newCharacter._id = uuid()
        STORY.characters[newCharacter.name] = newCharacter;
        res.send(newCharacter)
    })
    

    app.route('/STORY')
    .get((req, res)=> {
        res.send(STORY);
    })
    .post((req, res) => {
        let newStoryElement = req.body;
        newStoryElement._id = uuid()
        STORY[newStoryElement.name] = newStoryElement;
        res.send(newStoryElement)
    })

app.route (`/STORY/characters/:name`)
    .get((req, res) => {
        let foundCharacter = STORY.characters[req.params.name]
            res.send(foundCharacter)
    })
    .put((req, res) => {
        let foundCharacter = STORY.characters[req.params.name]
        STORY.characters[foundCharacter.name] = req.body
        res.send(foundCharacter)
    })
    .delete((req, res) => {
        let foundCharacter = STORY.characters[req.params.name]
        delete STORY.characters[foundCharacter.name]
        res.send("Character Deleted")
    })

app.listen(PORT, () => console.log(`server running on port ${PORT}`));