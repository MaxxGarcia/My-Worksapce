const express = require("express");
const axios = require("axios");
const qs = require("qs");

const oauthRoutes = express.Router();

let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    method:"POST",
    form: {
        grant_type: 'client_credentials'
    }
}
var client_id = "0072e6df1c54421c8b33efca637ad1ec"
var client_secret = "03ee415e96834b4e9501b9cb604974e7"

oauthRoutes.get("/", (req, res) => {
    axios(authOptions)
        .then(response => console.log(response))
        .catch(err => console.log(err))
})

module.exports = oauthRoutes;
