const fs = require('fs');

async function saveWeatherData(weatherData) {
    fs.writeFile('weatherData.json', JSON.stringify(weatherData, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file", err);
        } else {
            console.log("Weather data saved to weatherData.json!");
        }
    });
}
module.exports = saveWeatherData;