let input = document.querySelector(".input");
let searchIcon = document.querySelector(".search-icon");
let currentTime = document.querySelector(".fullTime");
let windSpeed = document.querySelector(".wind-text");
let degree = document.querySelector(".degree");
const apiKey = "dd8957905ee1217bcb450b8af57b72d6";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=germany&appid=${apiKey}`;

searchIcon.addEventListener("click", function () {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      windSpeed.innerText = `${data.wind.speed} KM/H`;
      degree.innerText = `${Math.ceil(data.main.temp - 273.15)} °C`;
    })
    .catch((err) => {
      console.log(err);
    });
});

function changeData() {}

setInterval(() => {
  let date = new Date();
  currentTime.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
