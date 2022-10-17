import getWeather from "./apiCaller";
import createWeatherData from "./dom";

const weatherForm = document.querySelector("#location-form");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = document.querySelector("#location-input");

  const data = await getWeather(location.value);

  createWeatherData(data);

  e.target.reset();
});
