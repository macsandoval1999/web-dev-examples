// *** Current Weather ************************************************

// Select DOM elements for weather display
const weatherIconBox = document.querySelector('#weather-icon');
const todayWeatherInfoBox = document.querySelector('#weather-today');

// OpenWeatherMap API URL for current weather in Mesa, AZ
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.41467838414674&lon=-111.83429718634753&units=imperial&appid=9413a2c5bf89718799396cb548b18ec9';

// Function to fetch weather data
async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display weather data on the webpage
function displayWeather(data) {

    // Create img element and get weather icon URL
    const icon = document.createElement('img'); 
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // Set weather icon
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);
    // Append icon to weather icon box
    weatherIconBox.appendChild(icon);


    // Create info variables for temperature
    const tempPara = document.createElement('p'); // Temp
    tempPara.innerHTML = `<strong>Temperature:</strong> ${data.main.temp.toFixed(0)}°F`;

    const descPara = document.createElement('p'); // Description
    let desc = data.weather[0].description;
    descPara.innerHTML = `<strong>Description:</strong> ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    const highTempPara = document.createElement('p'); // High Temp
    highTempPara.innerHTML = `<strong>High:</strong> ${data.main.temp_max.toFixed(0)}°F`;

    const lowTempPara = document.createElement('p'); // Low Temp
    lowTempPara.innerHTML = `<strong>Low:</strong> ${data.main.temp_min.toFixed(0)}°F`;

    const humidityPara = document.createElement('p'); // Humidity
    humidityPara.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;

    const sunrisePara = document.createElement('p'); // Sunrise
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    sunrisePara.innerHTML = `<strong>Sunrise:</strong> ${sunriseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    
    const sunsetPara = document.createElement('p'); // Sunset
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunsetPara.innerHTML = `<strong>Sunset:</strong> ${sunsetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    // Append Info to current weather info box
    todayWeatherInfoBox.appendChild(tempPara);
    todayWeatherInfoBox.appendChild(descPara);
    todayWeatherInfoBox.appendChild(highTempPara);
    todayWeatherInfoBox.appendChild(lowTempPara);
    todayWeatherInfoBox.appendChild(humidityPara);
    todayWeatherInfoBox.appendChild(sunrisePara);
    todayWeatherInfoBox.appendChild(sunsetPara);
}

fetchWeather(url);



// *** 3 - Day Forecast ************************************************

// Select DOM element for forecast display
const forecastBox = document.querySelector('.forecast-box');

// OpenWeatherMap API URL for 3-day forecast in Mesa, AZ
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.41467838414674&lon=-111.83429718634753&units=imperial&appid=9413a2c5bf89718799396cb548b18ec9';

// Function to fetch forecast data
async function fetchForecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to filter forecast data for 3 days at 3 PM. These entries are for temps at 3 PM each day.
function filterForecastByTime(data) {
    return data.list.filter(forecast => forecast.dt_txt.includes('15:00:00'));
}

// Function to display 3-day forecast on the webpage
function displayForecast(data) {
    // Loop through forecast data to get entries for the next 3 days
    const filteredData = filterForecastByTime(data);


    for (let i = 0; i < 3; i++) {
        // Get forecast entry
        const forecast = filteredData[i];
        // Create a container for each day's forecast
        const daybox = document.createElement('div');
        // Add class for styling
        daybox.classList.add('forecast-day');
        
        // Extract and format necessary information
        const date = new Date(forecast.dt * 1000); // Convert Unix timestamp to milliseconds
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get weekday name

        const iconSrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        const temp = forecast.main.temp.toFixed(0);

        // Create elements for each piece of information
        const weekdayPara = document.createElement('p');
        weekdayPara.innerHTML = `<strong>${weekday}</strong>`;

        const icon = document.createElement('img');
        icon.setAttribute('src', iconSrc);
        icon.setAttribute('alt', forecast.weather[0].description);

        const tempPara = document.createElement('p');
        tempPara.innerHTML = `${temp}°F`;


        // Append elements to the daybox
        daybox.appendChild(weekdayPara);
        daybox.appendChild(icon);
        daybox.appendChild(tempPara);

        // Append the daybox to the forecastBox
        forecastBox.appendChild(daybox);
    }
}
fetchForecast(forecastUrl);