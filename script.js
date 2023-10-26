// Define your API key
const apiKey = 'e3e1383c2c5152524fad92b2ec0d5fc0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

// Function to fetch current weather data
async function fetchCurrentWeather(cityName) {
  try {
    const response = await fetch(`${apiUrl}weather?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 200) {
      // Data retrieval was successful
      displayCurrentWeather(data);
    } else {
      // Handle error
      displayError(`Error: ${data.message}`);
    }
  } catch (error) {
    // Handle network errors
    displayError('Network error. Please check your connection.');
  }
}

// Function to fetch temperature and wind speed data
async function fetchTemperatureAndWindSpeed(cityName) {
  try {
    const response = await fetch(`${apiUrl}weather?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 200) {
      // Data retrieval was successful
      displayTemperatureAndWindSpeed(data);
    } else {
      // Handle error
      displayError(`Error: ${data.message}`);
    }
  } catch (error) {
    // Handle network errors
    displayError('Network error. Please check your connection.');
  }
}

// Function to fetch 24-hour forecast data
async function fetch24HourForecast(cityName) {
  try {
    const response = await fetch(`${apiUrl}forecast?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 200) {
      // Data retrieval was successful
      display24HourForecast(data);
    } else {
      // Handle error
      displayError(`Error: ${data.message}`);
    }
  } catch (error) {
    // Handle network errors
    displayError('Network error. Please check your connection.');
  }
}

// Function to display current weather data
function displayCurrentWeather(data) {
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');
  const humidityElement = document.getElementById('humidity');
  const windSpeedElement = document.getElementById('wind-speed');

  cityNameElement.textContent = data.name;
  temperatureElement.textContent = `Temperature: ${data.main.temp.toFixed(2)}°Celsius`;
  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

// Function to display temperature and wind speed data
function displayTemperatureAndWindSpeed(data) {
  const temperatureElement = document.getElementById('temperature');
  const windSpeedElement = document.getElementById('wind-speed');

  temperatureElement.textContent = `Temperature: ${data.main.temp.toFixed(2)}°Celsius`;
  windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

// Function to display 24-hour forecast data
function display24HourForecast(data) {
  const forecastListElement = document.getElementById('forecast-list');
  forecastListElement.innerHTML = ''; // Clear previous data

  // Loop through the forecast data and create list items
  data.list.forEach((item, index) => {
    const forecastItem = document.createElement('li');
    forecastItem.textContent = `Hour ${index + 1}: ${item.main.temp.toFixed(2)}°C`;
    forecastListElement.appendChild(forecastItem);
  });
}

// Function to display an error message
function displayError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.style.display = 'block';

  // Corrected setTimeout function
  setTimeout(() => {
    errorElement.style.display = 'none';
  }, 5000);
}

// Event listener for the search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const cityName = document.getElementById('city-input').value;

  if (cityName) {
    fetchCurrentWeather(cityName); // Fetch current weather
    fetchTemperatureAndWindSpeed(cityName); // Fetch temperature and wind speed
    fetch24HourForecast(cityName); // Fetch 24-hour forecast
    saveCityToHistory(cityName);
  }
});

// Load and display search history when the page loads
const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
displaySearchHistory(searchHistory);

// Add an event listener to a button that triggers the unit toggle
const toggleButton = document.getElementById('unit-toggle-button');
toggleButton.addEventListener('click', toggleTemperatureUnit);

// Add an event listener to a button that triggers the data refresh
const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', refreshWeatherData);

// Function to save the city to search history
function saveCityToHistory(cityName) {
  // Implement this function to save the city to search history.
}

// Function to display search history
function displaySearchHistory(searchHistory) {
  // Implement this function to display search history.
}

// Function to toggle temperature unit
function toggleTemperatureUnit() {
  // Implement this function to toggle temperature unit.
}

// Function to refresh weather data for the currently displayed city
function refreshWeatherData() {
  const cityNameElement = document.getElementById('city-name');
  const cityName = cityNameElement.textContent;

  fetchCurrentWeather(cityName); // Fetch current weather
  fetchTemperatureAndWindSpeed(cityName); // Fetch temperature and wind speed
  fetch24HourForecast(cityName); // Fetch 24-hour forecast
}

