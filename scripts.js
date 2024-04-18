// Define the API URL and options
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '845526809dmsh10e8f0a6f995569p16c445jsn2e80f76440d7', // Replace with your API key
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    // Set the city name in the HTML
    const cityName = document.getElementById('cityName');
    if (cityName) {
        cityName.innerHTML = city;
    }

    // Define the API URL with the city parameter
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    // Function to fetch weather data
    async function fetchWeatherData() {
        try {
            // Fetch data from the API
            const response = await fetch(url, options);

            // Check for successful response
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the response as JSON
            const result = await response.json();

            // Update the HTML elements with the fetched data
            document.getElementById('cloud_pct').innerHTML = `Cloud Coverage: ${result.cloud_pct}%`;
            document.getElementById('temp').innerHTML = `Temperature: ${result.temp}°C`;
            document.getElementById('feels_like').innerHTML = `Feels Like: ${result.feels_like}°C`;
            document.getElementById('humidity').innerHTML = `Humidity: ${result.humidity}%`;
            document.getElementById('min_temp').innerHTML = `Min Temperature: ${result.min_temp}°C`;
            document.getElementById('max_temp').innerHTML = `Max Temperature: ${result.max_temp}°C`;
            document.getElementById('wind_speed').innerHTML = `Wind Speed: ${result.wind_speed} m/s`;
            document.getElementById('wind_degree').innerHTML = `Wind Degree: ${result.wind_degree}°`;
            document.getElementById('sunrise').innerHTML = `Sunrise: ${new Date(result.sunrise * 1000).toLocaleTimeString()}`;
            document.getElementById('sunset').innerHTML = `Sunset: ${new Date(result.sunset * 1000).toLocaleTimeString()}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    // Call the async function to fetch the weather data
    fetchWeatherData();
};

// Add an event listener to the form submit button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    if (cityInput) {
        getWeather(cityInput.value);
    }
});

// Call getWeather function with the initial city name
getWeather('sialkot');
