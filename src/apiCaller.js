const API_KEY = "b3d6abbbc5cc818b36dae477dd8ac490";

const getWeather = async (city, measure) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}${
        measure ? "&units=metric" : ""
      }`
    );

    const weatherData = await response.json();

    const { main, weather, name } = weatherData;

    const formattedData = { main, name, weather: weather[0] };

    return formattedData;
  } catch (error) {
    console.log(error);

    const weatherDiv = document.querySelector(".weather-data");

    weatherDiv.innerHTML =
      "Sorry, we couldn't find the place youre searching for.";
  }
};

export default getWeather;
