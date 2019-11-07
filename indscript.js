 
 function myfunc(keyword){
    document.getElementById("cards").innerHTML=" ";
    console.log(keyword);
    //fetches the response from api using Keyword entered in search
    fetch('http://www.omdbapi.com/?apikey=89d41337&s='+keyword)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    //response can be put in array to retrieve without refreshing of page
      var responseArray = myJson["Search"].map(obj =>{ 
       // sending imdbID in form of url to show.html page to retrieve details
       var url="show.html?name="+obj.imdbID;
       document.getElementById("cards").innerHTML+='<div class="card"><a href= '+url+'><img src='+obj.Poster+' alt="moviePoster" style="width:100%"><div class=""><h4 style="text-align:center;"><b>'+obj.Title+'</b></h4></div></a></div>';
        });
  });

}
