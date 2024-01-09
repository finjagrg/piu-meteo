function updateWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#big-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#only-city");

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "0to1c5e82ab3ce410bae0704083170ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function replaceCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let searchInput = searchInputElement.value;
  searchCity(searchInput);
}

let searchForm = document.querySelector("#search-area");
searchForm.addEventListener("submit", replaceCity);
