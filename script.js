const apiurl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;
const apikey = `d478e932601da284bbbb838e01e6bc80`;
const cityInput = document.getElementById("cityname");
const searchButton = document.getElementById("search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(`${apiurl}&appid=${apikey}&q=${city}`);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/s";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./mist.png";
    }
}

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        checkweather(city);
    } else {
        alert("Please enter your city name");
    }
});