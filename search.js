// Define your API key
const apiKey = 'e3e1383c2c5152524fad92b2ec0d5fc0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

// Function to fetch current weather data
async function fetchCurrentWeather(cityName) {
  try {
    const response = await fetch(`${apiUrl}weather?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 200) {
      displayCurrentWeather(data);
    } else {
      displayError(`Error: ${data.message}`);
    }
  } catch (error) {
    displayError('Network error. Please check your connection.');
  }
}

// Function to fetch 5-day forecast
async function fetchFiveDayForecast(cityName) {
  try {
    const response = await fetch(`${apiUrl}forecast?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 200) {
      displayFiveDayForecast(data);
    } else {
      displayError(`Error: ${data.message}`);
    }
  } catch (error) {
    displayError('Network error. Please check your connection.');
  }
}

// Event listener for the search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.getElementById('city-input').value;

  if (cityName) {
    fetchCurrentWeather(cityName); // Fetch current weather
    fetchFiveDayForecast(cityName); // Fetch 5-day forecast
    // Implement function to save city to search history
  }
});
