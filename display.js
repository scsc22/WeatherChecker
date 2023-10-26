// Function to display current weather data
function displayCurrentWeather(data) {
    const cityNameElement = document.getElementById('city-name');
    const dateElement = document.getElementById('date');
    const iconElement = document.getElementById('weather-icon');
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('wind-speed');
  
    cityNameElement.textContent = data.name;
    dateElement.textContent = new Date(data.dt * 1000).toLocaleDateString();
    iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">`;
    temperatureElement.textContent = `Temperature: ${data.main.temp.toFixed(2)}°C`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  }
  
  // Function to display 5-day forecast
  function displayFiveDayForecast(data) {
    const forecastListElement = document.getElementById('forecast-list');
    forecastListElement.innerHTML = '';
  
    for (let i = 0; i < 5; i++) {
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      const dateElement = document.createElement('p');
      dateElement.textContent = new Date(data.list[i].dt * 1000).toLocaleDateString();
      const iconElement = document.createElement('img');
      iconElement.src = `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
      iconElement.alt = data.list[i].weather[0].description;
      const temperatureElement = document.createElement('p');
      temperatureElement.textContent = `Temperature: ${data.list[i].main.temp.toFixed(2)}°C`;
      const windSpeedElement = document.createElement('p');
      windSpeedElement.textContent = `Wind Speed: ${data.list[i].wind.speed} m/s`;
      const humidityElement = document.createElement('p');
      humidityElement.textContent = `Humidity: ${data.list[i].main.humidity}%`;
  
      forecastItem.appendChild(dateElement);
      forecastItem.appendChild(iconElement);
      forecastItem.appendChild(temperatureElement);
      forecastItem.appendChild(windSpeedElement);
      forecastItem.appendChild(humidityElement);
      forecastListElement.appendChild(forecastItem);
    }
  }
  
  // Function to display an error message
  function displayError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  
    // Automatically hide the error message after 5 seconds
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 5000);
  }
  
  // Event listener for refreshing weather data
  const refreshButton = document.getElementById('refresh-button');
  refreshButton.addEventListener('click', () => {
    // Call functions to refresh current weather and 5-day forecast
    // Implement this based on your data fetching logic
  });
  
  // Event listener for toggling temperature unit
  const unitToggleButton = document.getElementById('unit-toggle-button');
  unitToggleButton.addEventListener('click', () => {
    // Implement this function to toggle temperature units (e.g., Celsius and Fahrenheit)
  });
  