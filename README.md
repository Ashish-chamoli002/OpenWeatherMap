

# Weather Data Fetcher
This project retrieves and displays current weather information for a specified city using the OpenWeatherMap API. The data is saved locally in a JSON file and also displayed on a web page.

## Project Structure
### execute.js: 
Main file to start the Express server, handle routes, and initiate data fetching.
### input-data.js: 
Contains the saveWeatherData function to save weather data as JSON.
### index.html: 
The front-end HTML page to display the weather data.
### get-weather-data.js: 
Fetches weather data from OpenWeatherMap using Axios.

## Getting Started

### Prerequisites
Node.js and npm installed on your machine.
Express and Axios packages for API calls and server handling.
Installing Dependencies
Install the required packages by running:


`npm install express axios`

Setting Up OpenWeatherMap API
Sign up at OpenWeatherMap and generate an API key.
Replace "your_api_key" in execute.js with your actual API key.

## Running the Project
Start the server by running:


`node execute.js`

Open your browser and go to http://localhost:3000 to view the weather data.