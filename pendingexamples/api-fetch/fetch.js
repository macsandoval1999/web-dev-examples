// select HTML elements in the document
const town = document.querySelector('#town');
const graphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temperature');



// define the URL to fetch data from
const appid = '9413a2c5bf89718799396cb548b18ec9';
const lat = '49.44897210231466';
const lon = '7.5567699999999896';
// lat/lon for Ramstein Air Base



// Full Path URL for Current Weather Data API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appid}&units=imperial`; // imperial to get Fahrenheit, metric to get Celsius



// Function to get the data from the API
async function apiFetch(url) {
    console.log('- Fetching data started..');
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(`Fetching ${error}`);
    }
    console.log('- Fetching data ended...');
}



// Function to display the results on the webpage
function displayResults(weatherData) {
    // Display town name
    town.innerHTML = `<h3>${weatherData.name}</h3>`;
    // Display weather graphic
    const iconCode = weatherData.weather[0].icon;
    const iconPath = `https://openweathermap.org/img/w/${iconCode}.png`;
    graphic.setAttribute('src', iconPath);
    graphic.setAttribute('alt', weatherData.weather[0].description);
    // Display weather description
    description.innerHTML = `<p>${weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</p>`;
    // Display temperature
    temperature.innerHTML = `<p>${weatherData.main.temp.toFixed(0)} &deg;F</p>`;
}


apiFetch(url);