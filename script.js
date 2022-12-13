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

