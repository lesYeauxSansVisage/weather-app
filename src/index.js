// const API_KEY = "b3d6abbbc5cc818b36dae477dd8ac490";

// const getWeather = async (city) => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//   );

//   const weatherData = await response.json();

//   const { weather } = await weatherData;

//   console.log(weatherData);

//   const weatherDiv = document.querySelector(".weather-data");

//   console.log(weather);

//   weatherDiv.innerHTML = `<div>${weather[0].description}</div>
//   <img src="http://openweathermap.org/img/w/${weather[0].icon}.png" />`;
// };

// getWeather("maranguape");

// const weatherForm = document.querySelector("#location-form");

// weatherForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const location = document.querySelector("#location-input");

//   getWeather(location.value);
// });
