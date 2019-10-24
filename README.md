<h1>LIRI BOT</h1>

<h4>LIRI is a Language Interpretation and Recognition Interface. <br>
LIRI will be a command line node app that takes in parameters and gives you back data.</h4>


<h2>Overview</h2>

<h4>LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.</h4>

  *LIRI can take in any of the following commands followed by a request to retrieve that data for you:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   
   
 <h2>How to Run this App</h2>
 
   * Ensure you have the latest version of Node.js.

   * Clone this repository to your computer.
   
   * Install the required node packages [axios, moment, spotify] 
   
   * Obtain API Keys for OMBDI and the Bandsintown APIs.

   * Send requests using the axios package to the Bands in Town, Spotify and OMDB APIs.
   
   
<h2>What Each Command Does</h2>
 
  `1. node liri.js concert-this [artist name here]`

 *This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

   * Name of the venue

   * Venue location

   * Date of the Event (use moment to format this as "MM/DD/YYYY")
     
  `2. node liri.js spotify-this-song [song name here]`

  *This will show the following information about the song in your terminal/bash window.

   * Artist(s)

   * The song's name

   * A preview link of the song from Spotify

   * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
  `3. node liri.js movie-this [movie name here]`

  *This will output the following information to your terminal/bash window:
  
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
    
   If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' 
    
  `4. node liri.js do-what-it-says`

   *Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

   * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

   * Edit the text in random.txt to test out the feature for movie-this and concert-this.
   
   
   <h2>Demonstration Screenshots</h2>
   
   * node liri.js concert-this
   <img width="1351" alt="concertThis" src="https://user-images.githubusercontent.com/51764119/67503554-ac422f00-f63c-11e9-823b-7fda69585764.png">
   
   * node liri.js spotify-this-song
   <img width="1351" alt="spotifyThis" src= "https://user-images.githubusercontent.com/51764119/67504113-abf66380-f63d-11e9-847b-8d660ae5593f.png">

   * node liri.js movie-this
   <img width="1351" alt="movieThis" src="https://user-images.githubusercontent.com/51764119/67504593-861d8e80-f63e-11e9-9424-b919dc248ca7.png">
   
   * node liri.js do-what-it-says
   <img width = "1351" alt="doWhatItSays" src="https://user-images.githubusercontent.com/51764119/67504771-e8768f00-f63e-11e9-8951-8a1621c64bb4.png">
     
