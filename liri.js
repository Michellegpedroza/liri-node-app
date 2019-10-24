//Variables to require all node packages and import files
const dotenv = require(`dotenv`).config()
const keys = require(`./keys.js`)
const fs = require(`fs`)
const axios = require(`axios`)
const Spotify = require(`node-spotify-api`)
const moment = require(`moment`)

const spotify = new Spotify(keys.spotify)

// Capture the users Input
const action = process.argv[2]
const userResponse = process.argv[3]

//Switch case for each action
switch (action) {
  case `concert-this`:
    concertThis()
    break
  case `spotify-this-song`:
    spotifyThis()
    break
  case `movie-this`:
    movies()
    break
  case `do-what-it-says`:
    doThis()
    break
  default:
    console.log(`Enter a valid search term, such as: `)
    console.log(`{concert-this},{spotify-this-song}, {movie-this}, or {do-what-it-says} followed by your request.`)
    break
}

//Function to get the bandsintown API & return users request
function concertThis() {
  axios.get(`https://rest.bandsintown.com/artists/` + userResponse + `/events?app_id=` + keys.bands.id)
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        //print the artists concert info
        console.log(`Venue Name: ` + response.data[i].venue.name)
        console.log(`Venue Location: ` + response.data[i].venue.city + `, ` + response.data[i].venue.country)
        console.log(`Date of the Event: ` + moment(response.data[i].datetime).format(`MM/DD/YYYY`))
      }
    })
}

// Function to retrieve the users song request
function spotifyThis() {
  spotify.search({ type: `track`, query: userResponse }, function (err, data) {
    if (err) {
      console.log(err)
    }

    //Log users song request info
    const songRequested = data.tracks.items
    console.log(`Artist: ` + songRequested[0].artists[0].name)
    console.log(`Song Name: ` + songRequested[0].name)
    console.log(`Preview Link: ` + songRequested[0].preview_url)
    console.log(`Album: ` + songRequested[0].album.name)
  })

  // If users request is empty 
  if (userResponse === ``) {
    userResponse = `The Sign`
  }
}

