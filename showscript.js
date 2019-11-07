window.onload = function () {
  //In this url variable,the url from index page is stored.
    var url = document.location.href,
    //In the url,elimiating (?) and (=) and getting the value(i.e alpha3code)
        params = url.split('?')[1].split('=')[1];
        console.log(params);
        //search=url.split('?')[1].split('&')[1].split('=')[1];
    fetch('http://www.omdbapi.com/?apikey=89d41337&i='+params)
  .then(function(response) {
    return response.json();
  })
  .then(function(movieData) {
  document.getElementById("mname").innerHTML = movieData.Title;
  document.getElementById("rate").innerHTML = movieData.imdbRating;
  document.getElementById("director").innerHTML = movieData.Director;
  document.getElementById("poster").src = movieData.Poster;
  document.getElementById("rd").innerHTML = movieData.Released;
  document.getElementById("actors").innerHTML = movieData.Actors;
  document.getElementById("lang").innerHTML = movieData.Language;
  document.getElementById("imdbvotes").innerHTML = movieData.imdbVotes;
  document.getElementById("BO").innerHTML = movieData.BoxOffice;
})
}