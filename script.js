//data http://www.omdbapi.com/?apikey=8da09333&
//poster http://img.omdpapi.com/?apikey=8da09333& only available to patrons, might want to look into another movie poster api.
var getMovie = function (title) {
    var apiUrl = 'http://www.omdbapi.com/?t=' + title + '&apikey=8da09333';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
              //console.log(data);
            displayTitle(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to OMDB Server');
      });
  };
  
  var displayTitle = function(data) {
    var movieTitle = document.querySelector('.movieResults');
    movieTitle.textContent = data.Title
    var movieActor = document.querySelector('.actors');
    var movieGenre = document.querySelector('.genre');
    var moviePlot = document.querySelector('.plot');
    var movieScore = document.querySelector('.metascore');
  }
  
  
  
  var search = document.querySelector("#searchBar"); 
  search.addEventListener("submit", function (event){
      event.preventDefault();
      var input = document.querySelector('#query');
      var userInput = input.value
      getMovie(userInput);
})

var APIKey = "48385021c28044a383e2de4c194654e4";

var game;

var queryURL = "https://api.rawg.io/api/games?key=48385021c28044a383e2de4c194654e4&dates=2019-09-01,2019-09-30&platforms=18,1,7" + game;

function getApi(queryURL) {
    fetch(queryURL)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          responseText.textContent = response.status;
        }
        return response.json();
    });
  }
  
  getApi(queryURL);

  var getMovie = function (movie) {
      var apiUrl = 'http://www.omdbapi.com/?t=' + title + '&apikey=8da09333';
    
      fetch(apiUrl)
        .then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              displayRepos(data, user);
            });
          } else {
            alert('Error: ' + response.statusText);
          }
        })
        .catch(function (error) {
          alert('Unable to connect to GitHub');
        });
    };