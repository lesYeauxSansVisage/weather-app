const API_KEY = "b3d6abbbc5cc818b36dae477dd8ac490";

const getWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );

  const weatherData = await response.json();

  console.log(weatherData);
};

getWeather("maranguape");
