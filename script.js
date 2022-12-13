// requests and stores data from the movie API 
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
  
  //Displays selected data from storage to the webpage
  var displayTitle = function(data) {
    var movieTitle = document.querySelector('.movieResults');
    movieTitle.textContent = data.Title
    
    var movieActor = document.querySelector('.actors');
    movieActor.textContent = data.Actors
    
    var movieGenre = document.querySelector('.genre');
    movieGenre.textContent = data.Genre
    
    var moviePlot = document.querySelector('.plot');
    moviePlot.textContent = data.Plot
    
    var movieScore = document.querySelector('.metascore');
    movieScore.textContent = data.Metascore
  }
  
  
  
  var search = document.querySelector("#searchBar"); 
  search.addEventListener("submit", function (event){
      event.preventDefault();
      var input = document.querySelector('#query');
      var userInput = input.value
      getMovie(userInput);
})

