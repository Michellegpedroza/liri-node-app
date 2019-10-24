//Variables to require all node packages and import files
const dotenv = require(`dotenv`).config()
const keys = require(`./keys.js`)
const fs = require(`fs`)
const axios = require(`axios`)
const Spotify = require(`node-spotify-api`)
const moment = require(`moment`)

const spotify = new Spotify(keys.spotify)

// Capture the users Input
let action = process.argv[2]
let userResponse = process.argv[3]

//Switch case for each action
switch (action) {
  case `concert-this`:
    concertThis()
    break

  case `spotify-this-song`:
    spotifyThis()
    break

  case `movie-this`:
    movieThis()
    break

  case `do-what-it-says`:
    doWhatItSays()
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
    let userResponse = `The Sign`
  }
}

//Function to retrieve the users movie request
function movieThis() {
  axios.get(`http://www.omdbapi.com/?t=` + userResponse + `&y=&plot=short&apikey=` + keys.movies.id)
    .then(function (response) {
      //Console log the requested movies data
      console.log(`Title: ` + response.data.Title)
      console.log(`Release Year: ` + response.data.Year)
      console.log(`IMDB rating: ` + response.data.imdbRating)
      console.log(`Rotten Tomatoes Rating: ` + response.data.Ratings[1].Value)
      console.log(`Country Produced: ` + response.data.Country)
      console.log(`Language: ` + response.data.Language)
      console.log(`Plot: ` + response.data.Plot)
      console.log(`Actors: ` + response.data.Actors)
    })

  //If users movie request input is empty
  if (userResponse === ``) {
    let userResponse = `Mr. Nobody`
    console.log(`If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>`)
    console.log(`It's on Netflix!`)
  }
}

