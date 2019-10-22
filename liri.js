//Variables to require all node packages and files
const dotenv = require(`dotenv`).config()
const spotify = require(`node-spotify-api`)
const moment = require(`moment`)
const keys = require(`./keys.js`)
const fs = require(`fs`)

const spotify = new Spotify(key.spotify)
const omdbKey = keys.omdb.API_KEY

const firstCommand = process.argv[2]
const secondCommand = process.argv[3]


function spotifyThisSong(song) {
  spotify.search({ type: 'track', query: song, limit: 1 }, function (e, data) {
    if (e) {
      console.log(`Error Occured:` + e)
    }
  } else {
    for(let i = 0; i<data.tracks.items.length; i++) {
    let songData = data.tracks.items[i]
    //artist
    console.log(`Artist: ` + songData.artists[0].name)
    //song name
    console.log(`Song: ` + songData.name)
    //spotify preview link
    console.log(`Preview URL: ` + songData.preview_url)
    //album name
    console.log(`Album: ` + songData.album.name)
    console.log(`****************************`)
  }
});
}