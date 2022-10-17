function createWeatherData(data) {
  const weatherDisplayElement = document.querySelector(".weather-data");

  const weatherDisplay = `<h2>${data.name}</h2>
      <div class="weather-data__icon">
          <div class="icon">
              <img src="http://openweathermap.org/img/wn/${data.weather.icon}@2x.png" alt="rain-icon">
          </div>
          <p class="description">${data.weather.description}</p>
          <p class="main-temp">${data.main.temp}<span>º</span></p>
  
      </div>
      <div class="weather-data__temperature">
          <p class="min-temp"><span>MIN</span>${data.main.temp_min}<span>º</span></p>
          <p class="max-temp"><span>MAX</span>${data.main.temp_max}<span>º</span></p>
      </div>`;

  weatherDisplayElement.innerHTML = weatherDisplay;
}

export default createWeatherData;
