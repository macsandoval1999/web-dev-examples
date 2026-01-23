// Initialize DOM elements
const button = document.querySelector("#location-button"); // button with id "location-button"
const locationMessage = document.querySelector("#location-message"); // div with id "location-message"


// Add event listener to the button. When clicked, it triggers the following function expression
button.addEventListener("click", function () {
    // Check if geolocation is supported by the browser
    // navigator.geolocation is the API for geolocation
    if (navigator.geolocation) { // if geolocation is supported then...
        navigator.geolocation.getCurrentPosition( // get the current position of the device using the getCurrentPosition method of the Geolocation API and pass in the following custom callback functions
            function (position) { // success callback function
                const latitude = position.coords.latitude; // latitude of the device
                const longitude = position.coords.longitude; // longitude of the device
                // output location information
                locationMessage.innerHTML = `Latitude: ${latitude} 🧭 Longitude: ${longitude}<br>`; // display latitude and longitude
                locationMessage.innerHTML += `Region: ${getRegion(latitude, longitude)}`; // display region using getRegion function declrared below
                button.style.display = "none"; // hide the button after displaying location
            },
            function (error) { // error callback function
                locationMessage.textContent = `Error: ${error.message}`; // display error message if geolocation fails
            }
        );
    } else { // if geolocation is not supported by the browser then...
        locationMessage.textContent = "Geolocation is not supported by this browser."; // display message if geolocation is not supported
    }
});


// Function to determine the region based on latitude and longitude
function getRegion(lat, lon) {
    if (lon > 180) lon -= 360; //normalize to -180..180. This means longitudes greater than 180 are converted to their equivalent negative values. We do this to simplify region mapping.

    // Determine region based on latitude and longitude
    // switch with true allows evaluating multiple conditions. Each case can have a boolean expression that, if true, will execute the corresponding block. case statements can have complex conditions.  default case handles unmapped regions.
    switch (true) {
        // North America (excl. Mexico/Central America)
        case lat >= 24 && lat <= 83 && lon >= -172 && lon <= -52:
            return "North America";
        // Mexico and Central America
        case lat >= 7 && lat < 24 && lon >= -118 && lon <= -77:
            return "Mexico and Central America";
        // South America
        case lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34:
            return "South America";
        // Europe
        case lat >= 35 && lat <= 71 && lon >= -25 && lon <= 45:
            return "Europe";
        // Africa
        case lat >= -35 && lat <= 37 && lon >= -17 && lon <= 52:
            return "Africa";
        // Asia
        case lat >= 5 && lat <= 80 && lon >= 45 && lon <= 180:
            return "Asia";
        // Oceania
        case lat >= -50 && lat <= 0 && lon >= 110 && lon <= 180:
            return "Oceania";
        default:
            return "Not mapped";
    }
}