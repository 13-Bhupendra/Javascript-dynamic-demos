const key_api = "0bdb7055ded80cd80c9a240370a74ce5";
const deg = document.getElementById("deg")
const city = document.getElementById("Cityname")
const humidity = document.getElementById("humid")
const speed = document.getElementById("speed")
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");


function weatherCheck(cityName)
{
    
        const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + cityName +"&appid=0bdb7055ded80cd80c9a240370a74ce5";
    
        fetch(api_url).then(Response => Response.json())
        .then(data => {

            console.log(data)
            deg.innerHTML = Math.round(data.main.temp) + " °C" ;
            city.innerHTML = data.name
            humidity.innerHTML = `<i class="fas fa-tint"></i> &nbsp Humidity => ${data.main.humidity}%`;
            speed.innerHTML = `<i class="fas fa-wind"></i> &nbsp Speed => ${data.wind.speed} m/s`;
        }).catch(error => console.log("error : " , error));

}

searchBtn.addEventListener("click" , function () {

    const value = searchBar.value.trim();

    if(!value == " ")
    {
        weatherCheck(value);
    }
    else
    {
        alert("Something went wrong. Please try again later.");
    }
    

});
