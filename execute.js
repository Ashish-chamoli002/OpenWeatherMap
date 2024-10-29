const  saveWeatherData  = require('./business-action/input-data');
const express = require('express');
const fetchWeather = require('./services/get-weather-data');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Fetch weather data and send it as JSON and save in JSON
app.get('/weather', async (req, res) => {
    try {
        const city = "Chandigarh";
        const apiKey = "21ff86547428e5c6ba1ad5a02074b933"; 
        const weatherData = await fetchWeather(city, apiKey);
        await saveWeatherData(weatherData);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
