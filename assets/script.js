// requests and stores data from the movie API 
var getMovie = function (title) {
  var apiUrl = 'http://www.omdbapi.com/?t=' + title + '&apikey=8da09333';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayTitle(data);
        });
      } else {
        clearMovie(data);
      }
    });
};
// clears data in case there is no movie to display
var clearMovie = function (data) {
  var movieTitle = document.querySelector('.movieResults');
  movieTitle.textContent = '';

  var movieActor = document.querySelector('.actors');
  movieActor.textContent = '';

  var movieGenre = document.querySelector('.genre');
  movieGenre.textContent = '';

  var moviePlot = document.querySelector('.plot');
  moviePlot.textContent = '';

  var movieScore = document.querySelector('.metascore');
  movieScore.textContent = '';
};

var displayTitle = function (data) {
  var movieTitle = document.querySelector('.movieResults');
  movieTitle.textContent = data.Title;

  var movieActor = document.querySelector('.actors');
  movieActor.textContent = data.Actors;

  var movieGenre = document.querySelector('.genre');
  movieGenre.textContent = data.Genre;

  var moviePlot = document.querySelector('.plot');
  moviePlot.textContent = data.Plot;

  var movieScore = document.querySelector('.metascore');
  movieScore.textContent = data.Metascore;
};


//requests and stores data from the video game API
var getGame = function (game) {
  var apiGame = 'https://api.rawg.io/api/games?key=48385021c28044a383e2de4c194654e4&search=' + game;
  console.log(apiGame)

  fetch(apiGame)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayGame(data);
        });
      } else {
        clearGame(data);
      }
    });
};
// clears game data in case there is no game to display
var clearGame = function (data) {
  var gameTitle = document.querySelector('.gameResults');
  gameTitle.textContent = '';

  var gameEsrb = document.querySelector('.esrb');
  gameEsrb.textContent = '';

  var gameRelease = document.querySelector('.release');
  gameRelease.textContent = '';

  var gameGenre = document.querySelector('.gameGenre');
  gameGenre.textContent = '';

  var gamePlatform = document.querySelector('.platform');
  gamePlatform.textContent = '';
};

var displayGame = function (data) {
  var gameTitle = document.querySelector('.gameResults');
  gameTitle.textContent = data.results[0].name;

  var gameEsrb = document.querySelector('.esrb');
  gameEsrb.textContent = data.results[0].esrb_rating?.name || "No esrb rating";

  // if(!data.results[0].esrb_rating) return;

  var gameRelease = document.querySelector('.release');
  gameRelease.textContent = "Released: " + data.results[0]?.released || "Released: N/A";

  var gameGenre = document.querySelector('.gameGenre');
  gameGenre.textContent = "Genre: " + (data.results[0].genres[0]?.name || "N/A");

  var gamePlatform = document.querySelector('.platform');
  gamePlatform.textContent = "Platform: " + data.results[0]?.platforms[0]?.platform?.name || "Platform: N/A";
};


var search = document.querySelector("#searchBar");
search.addEventListener("submit", function (event) {
  event.preventDefault();
  var input = document.querySelector('#query');
  var userInput = input.value
  clearMovie(userInput);
  clearGame(userInput);
  getGame(userInput);
  getMovie(userInput);
  localStorage.setItem(input, userInput);
});
