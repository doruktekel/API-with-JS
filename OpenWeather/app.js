const input = document.querySelector("#input");
const url = "https://api.openweathermap.org/data/2.5/";
const apiKey = "c972c8169bf67dd2a011d0ed3be4bb84";
input.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    getCityname(e.target.value);
    e.target.value = "";
  }
});
const getCityname = (e) => {
  let cityName = e;
  let newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;
  fetch(newUrl)
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(
        ".app-content-name"
      ).innerHTML = `${response.sys.country} / ${response.name}`;
      document.querySelector(".app-content-degree").innerHTML = `${Math.round(
        response.main.temp
      )}°C `;
      document.querySelector(".app-content-desc").innerHTML = `${
        response.weather[0].description[0].toUpperCase() +
        response.weather[0].description.slice(1)
      }`;
      document.querySelector(".app-content-minmax").innerHTML = `${Math.round(
        response.main.temp_min
      )}°C  / ${Math.round(response.main.temp_max)}°C `;
    });
};
