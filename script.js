function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (!cityInput) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '3e76a12629b75fc0e96ea3dec8da0fb2';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
                return;
            }

            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>City: ${data.name}, ${data.sys.country}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
