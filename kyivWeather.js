    // Function to get weather data from Open-Meteo API
    async function getWeather() {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.4547&longitude=30.5238&current=temperature_2m,precipitation,wind_speed_10m');
            const data = await response.json();
            const currentDate = new Date(data.current.time);
            const formattedDate = currentDate.toLocaleDateString();
            // Weather data display
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <p> Date: ${formattedDate} </p>
                <p>Temperature: ${data.current.temperature_2m} ${data.current_units.temperature_2m} </p>
                <p>Precipitation: ${data.current.precipitation} ${data.current_units.precipitation}</p>
                <p>Wind speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}</p>
            `;
        } catch (error) {
            console.error('Error when receiving weather data:', error);
        }
    }
    // Call a function to get weather data when the page loads
    getWeather();