function replaceCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let searchInput = searchInputElement.value;
  let cityElement = document.querySelector("#only-city");
  cityElement.innerHTML = searchInput;
}

let searchForm = document.querySelector("#search-area");
searchForm.addEventListener("submit", replaceCity);
