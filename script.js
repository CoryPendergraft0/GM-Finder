var search = document.querySelector("#searchBar");
search.addEventListener("submit", function (event){
    event.preventDefault();
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