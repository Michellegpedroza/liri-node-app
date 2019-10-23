//Variables to require all node packages and files
const dotenv = require(`dotenv`).config()
const fs = require(`fs`)
const keys = require(`./keys.js`)
const Spotify = require(`node-spotify-api`)
const moment = require(`moment`)

const spotify = new Spotify(keys.spotify)

//Capture the users input
var action = process.argv[2]
var request = process.argv[3]

//Switch case for each instance
switch (action) {
  case `concert-this`:
    bandsInTown(request)
    break

  case `spotify-this-song`:
    spotifyThisSong(request)
    break

  case `movie-this`:
    movieThis(request)
    break

  case `do-what-it-says`:
    doWhatItSays(request)
    break

  case `default`:
    console.log(`These Instructions are not Valid`)
    break
}
