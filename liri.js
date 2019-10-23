//Variables to require all node packages and import files
const dotenv = require(`dotenv`).config()
const keys = require(`./keys.js`)
const fs = require(`fs`)
const axios = require(`axios`)
const Spotify = require(`node-spotify-api`)
const moment = require(`moment`)

const spotify = new Spotify(keys.spotify)

//Capture the users input
let action = process.argv[2]
let userRequest = process.argv[3]

//Switch case for each instance
switch (action) {
  case `concert-this`:
    bandsInTown()
    break

  case `spotify-this-song`:
    spotifyThisSong()
    break

  case `movie-this`:
    movieThis()
    break

  case `do-what-it-says`:
    doWhatItSays()
    break

  case `default`:
    console.log(`These Instructions are not Valid`)
    console.log(`Enter a valid search term such as: `)
    console.log(`{concert-this}, {spotify-this-song}, {movie-this}, {do-what-it-says} followed by your request`)
    break
}


//Function to get the bandsintown API and return users request
function bandsInTown() {
  axios.get(`https://rest.bandsintown.com/artists` + userRequest + `/events?app_id=` + keys.bands.id)
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        console.log(`Venue Name: ` + response.data[i].venue.name)
        console.log(`Venue Location: ` + response.data[i].venue.city + `, ` + response.data[i].venue.country)
        console.log(`Date of the Event: ` + moment(response.data[i].datetime).format(`MM/DD/YYYY`))
      }
    })
    .catch(e => {
      console.log(e)
    })
}