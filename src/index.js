const API_KEY = "b3d6abbbc5cc818b36dae477dd8ac490";

const getWeather = async (city) => {
  loaderComponent();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    const weatherData = await response.json();

    console.log(weatherData);

    const weatherDiv = document.querySelector(".weather-data");

    weatherDiv.innerHTML = createWeatherData(weatherData);
  } catch (error) {
    console.log(error);

    const weatherDiv = document.querySelector(".weather-data");

    weatherDiv.innerHTML =
      "Sorry, we couldn't find the place youre searching for.";
  }
  loaderComponent();
};

getWeather("maranguape");

const weatherForm = document.querySelector("#location-form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = document.querySelector("#location-input");

  getWeather(location.value);
});

function createWeatherData(data) {
  return `<h2>${data.name}</h2>
    <div class="weather-data__icon">
        <div class="icon">
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="rain-icon">
        </div>
        <p class="description">${data.weather[0].description}</p>
        <p class="main-temp">${data.main.temp}<span>º</span></p>

    </div>
    <div class="weather-data__temperature">
        <p class="min-temp"><span>MIN</span>${data.main.temp_min}<span>º</span></p>
        <p class="max-temp"><span>MAX</span>${data.main.temp_max}<span>º</span></p>
    </div>`;
}

async function loaderComponent() {
  const loadScreen = document.querySelector(".loading-screen");

  loadScreen.classList.toggle("active");
}
