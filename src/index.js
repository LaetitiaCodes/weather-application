// adding local date/time of the user//
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

//Implementing weather search based on current location button//

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let url = `${apiEndpoint}?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
  //Temperature converter//
  //Fahrenheit converting + updating dresscode-tipp//
  function changeToFahrenheit() {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let unitImperial = "imperial";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let urlImperial = `${apiEndpoint}?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unitImperial}`;
    axios.get(urlImperial).then(showWeather);
  }
  //Temperature converter//
  //Celsius converter + updating the dresscode-tipp//

  function changeToCelsius() {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unitMetric}`;
    axios.get(urlMetric).then(showWeather);
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

//Adding an advanced search function to display live weather//
function showWeather(response) {
  let nameCity = document.querySelector(".nameCity");
  let temperature = document.querySelector(".cityTemperature");
  let weatherCondition = document.querySelector("#weatherCondition");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let icon = document.querySelector("#weatherIcon");

  nameCity.innerHTML = `${response.data.name}`;
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  weatherCondition.innerHTML = `${response.data.weather[0].description}`;
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  windSpeed.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} m/s`;

  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}

//Manual weather search//
function searchWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".inputField");
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let city = searchInput.value;
  let unit = "metric";
  let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);
  //Temperature converter//
  //Fahrenheit converter//
  function changeToFahrenheit() {
    let searchInput = document.querySelector(".inputField");
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = searchInput.value;
    let unitImperial = "imperial";
    let urlImperial = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitImperial}`;
    axios.get(urlImperial).then(showWeather);
  }
  //Temperature converter//
  //Celsius converter //

  function changeToCelsius() {
    let searchInput = document.querySelector(".inputField");
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = searchInput.value;
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitMetric}`;
    axios.get(urlMetric).then(showWeather);
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}

//quick weather searches//
//Button London//
function searchWeatherLondon() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let city = "London";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);

  //Temperature converter//
  //Fahrenheit converter//
  function changeToFahrenheit() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "London";
    let unitImperial = "imperial";
    let urlImperial = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitImperial}`;
    axios.get(urlImperial).then(showWeather);
  }

  //Temperature converter//
  //Celsius converter//

  function changeToCelsius() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "London";
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitMetric}`;
    axios.get(urlMetric).then(showWeather);
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}

//Button Paris//
function searchWeatherParis() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let city = "Paris";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);

  //Temperature converter//
  //Fahrenheit converter//
  function changeToFahrenheit() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "Paris";
    let unitImperial = "imperial";
    let urlImperial = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitImperial}`;
    axios.get(urlImperial).then(showWeather);
  }

  //Temperature converter//
  //Celsius converter//

  function changeToCelsius() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "Paris";
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitMetric}`;
    axios.get(urlMetric).then(showWeather);
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}

//Button Vienna//
function searchWeatherVienna() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let city = "Vienna";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);

  //Temperature converter//
  //Fahrenheit converter//
  function changeToFahrenheit() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "Vienna";
    let unitImperial = "imperial";
    let urlImperial = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitImperial}`;
    axios.get(urlImperial).then(showWeather);
  }

  //Temperature converter//
  //Celsius converter//

  function changeToCelsius() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "Vienna";
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitMetric}`;
    axios.get(urlMetric).then(showWeather);
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}
//Default view at landing//
function searchWeatherStockholm() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
  let city = "Stockholm";
  let unit = "metric";
  let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(showWeather);

  //Temperature converter//
  //Fahrenheit converter//
  function changeToFahrenheit() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "Stockholm";
    let unitImperial = "imperial";
    let urlImperial = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitImperial}`;
    axios.get(urlImperial).then(showWeather);
  }

  //Temperature converter//
  //Celsius converter//

  function changeToCelsius() {
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let city = "Stockholm";
    let unitMetric = "metric";
    let urlMetric = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${unitMetric}`;
    axios.get(urlMetric).then(showWeather);
  }

  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", changeToCelsius);

  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", changeToFahrenheit);
}

let searchCurrentLocation = document.querySelector("#current-location");
searchCurrentLocation.addEventListener("click", getCurrentPosition);

let sendForm = document.querySelector("form");
sendForm.addEventListener("submit", searchWeather);

let londonQuicksearch = document.querySelector("#london-quicksearch");
londonQuicksearch.addEventListener("click", searchWeatherLondon);

let parisQuicksearch = document.querySelector("#paris-quicksearch");
parisQuicksearch.addEventListener("click", searchWeatherParis);

let viennaQuicksearch = document.querySelector("#vienna-quicksearch");
viennaQuicksearch.addEventListener("click", searchWeatherVienna);

searchWeatherStockholm();
