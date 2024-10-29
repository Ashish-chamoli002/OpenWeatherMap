const axios = require('axios');

async function fetchWeather(city, apiKey) {
   
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = await response.data; 
    return {
        city: data.name,
        temperature: data.main.temp,
        weather: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
    };

  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return null;
  }
}

module.exports = fetchWeather;