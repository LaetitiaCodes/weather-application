// adding current date/time

function formatDate(Date) {
  let now = new Date();
  let currentTime = document.querySelector("#time-now");
  let hours = (now.getHours() < 10 ? "0" : "") + now.getHours();
  let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[now.getDay()];
  currentTime.innerHTML = `${weekday}, ${hours}:${minutes}`;
  return currentTime;
}
formatDate(Date);
//Adding an advanced search function and display live weather

function showWeather(response) {
  let nameCity = document.querySelector(".nameCity");
  let temperature = document.querySelector(".cityTemperature");
  let weatherCondition = document.querySelector("#weatherCondition");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");

  nameCity.innerHTML = `${response.data.name}`;
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  weatherCondition.innerHTML = `${response.data.weather[0].description}`;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  windSpeed.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} m/s`;

  function showDresscode() {
    let dresscode = document.querySelector(".dresscodeTipp");
    let temperatureCelsius = Math.round(response.data.main.temp);
    let icon = document.querySelector("#weatherIcon");

    if (temperatureCelsius >= 15) {
      dresscode.innerHTML = "Take sunglasses!";
    } else {
      dresscode.innerHTML = "Take a scarf!";
    }
    icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    icon.setAttribute("alt", `${response.data.weather[0].description}`);
  }
  showDresscode();

  function changeToFahrenheit(response) {
    let temperatureToFahrenheit = document.querySelector("#cityTemperature");
    let searchInput = document.querySelector(".inputField");
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let value = searchInput.value;
    let unitImperial = "imperial";
    let urlImperial = `${apiEndpoint}?q=${value}&appid=${apiKey}&units=${unitImperial}`;
    axios
      .get(urlImperial)
      .then(
        (temperatureToFahrenheit.innerHTML = Math.round(
          response.data.main.temp
        ))
      );
  }

  function changeToCelsius(response) {
    let temperatureToCelsius = document.querySelector("#cityTemperature");
    let searchInput = document.querySelector(".inputField");
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let value = searchInput.value;
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?q=${value}&appid=${apiKey}&units=${unitMetric}`;
    axios
      .get(urlMetric)
      .then(
        (temperatureToCelsius.innerHTML = Math.round(response.data.main.temp))
      );
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}

function searchWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".inputField");
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let value = searchInput.value;
  let unit = "metric";
  let url = `${apiEndpoint}?q=${value}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);
}

//quick weather searches
function searchWeatherLondon() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let value = "London";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${value}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);
}

function searchWeatherParis() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let value = "Paris";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${value}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);
}

function searchWeatherVienna() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let value = "Vienna";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${value}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);
}

let sendForm = document.querySelector("form");
sendForm.addEventListener("submit", searchWeather);

let londonQuicksearch = document.querySelector("#london-quicksearch");
londonQuicksearch.addEventListener("click", searchWeatherLondon);

let parisQuicksearch = document.querySelector("#paris-quicksearch");
parisQuicksearch.addEventListener("click", searchWeatherParis);

let viennaQuicksearch = document.querySelector("#vienna-quicksearch");
viennaQuicksearch.addEventListener("click", searchWeatherVienna);
