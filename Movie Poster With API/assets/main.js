
const input = document.getElementById("input");
const btn = document.getElementById("search")

const img = document.getElementById("img")
const info = document.getElementById("info");
const title = document.getElementById("title");
const year = document.getElementById("year");
const writer = document.getElementById("writer");
const director = document.getElementById("director");
const country = document.getElementById("country");
const lang = document.getElementById("lang");

function movie(movieName){

    let api = "https://www.omdbapi.com/?t="+ movieName +"&apikey=1cf1c165";

    fetch(api).then(Response => Response.json())
    .then(data => {

        if (data.Response === "False") {
            alert("Movie not found! Please enter a valid movie name.");
            return;
        }
        
        img.src = data.Poster;
        info.innerHTML = data.Plot;
        title.innerHTML = "<span>Title :  </span>" +  data.Title;
        year.innerHTML = "<span>Year :  </span>" +  data.Year;
        writer.innerHTML ="<span>Writer :  </span>" + data.Writer;
        director.innerHTML = "<span>Director :  </span>" +  data.Director;
        lang.innerHTML = "<span>Language :  </span>" +  data.Language;
    });
}



btn.addEventListener("click" , function() {

    const movieName = input.value;

    if (movieName !== "") {
        movie(movieName);
    }
    else {
        alert("Please enter a movie name!");
    }     

});
