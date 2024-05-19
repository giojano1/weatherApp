const body = document.querySelector("body");
const input = document.querySelector("#searchBar");
const temp = document.querySelector("#temp");
const clouds = document.querySelector("#clouds");
const img = document.querySelector("#img");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const apiKey = "2b7a339c7a61413a8cf182354241905";
const endpoint = "http://api.weatherapi.com/v1/current.json";

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === "Return") {
    search();
  }
});
function search() {
  let city = input.value;
  const url = `${endpoint}?key=${apiKey}&q=${city}`;
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const weather = data.current;

      temp.textContent = `${weather.temp_c}°C`;
      clouds.textContent = weather.condition.text;
      humidity.textContent = `${weather.humidity}%`;
      wind.textContent = `${weather.wind_kph}Km/h`;
      //   img
      if (
        weather.condition.text === "Clear" ||
        weather.condition.text === "Sunny"
      ) {
        img.src = "assets/img/clear.png";
      } else if (
        weather.condition.text === "Partly cloudy" ||
        weather.condition.text === "Overcast"
      ) {
        img.src = "assets/img/cloud.png";
      } else if (
        weather.condition.text === "Patchy light rain with thunder" ||
        weather.condition.text === "Light rain" ||
        weather.condition.text === "Moderate rain"
      ) {
        img.src = "assets/img/rain.png";
      } else if (weather.condition.text === "Mist") {
        img.src = "assets/img/mist.png";
      } else if (weather.condition.text === "Light Snow") {
        img.src = "assets/img/snow.png";
      }
      //   bck
      if (weather.is_day === 0) {
        body.classList.remove("day");
        body.classList.add("night");
      } else {
        body.classList.remove("night");
        body.classList.add("day");
      }
    });
}
