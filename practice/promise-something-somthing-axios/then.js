const axios = require('axios');

//promise chaining//

const swUrl = 'https://swapi.co/api/people/1';

const someVar = axios.get(swUrl)
.then(response => {
    const starWarsFilm = response.data.films[0]
    return starWarsFilm
})
.then(film =>{  return axios.get(film + "/")})
.then(response => {return axios.get(response.data.characters[4])})
.then(character => console.log(character))
.catch(err => console.log( "an error occoured" + err))