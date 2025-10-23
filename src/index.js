function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "etab4ae54eba8ab35o7f9e68e3e0f304";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Venice");
