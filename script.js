const apiKey = "5fe36b192ffd1c36dffb6752bc1722b2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function search(){
    cityName =  document.getElementById('location').value;

    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";  
}

