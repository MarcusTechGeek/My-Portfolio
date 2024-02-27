// Define an array of days of the week
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Define an array of weather conditions
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// Define minimum and maximum temperature range
let minTemp = 0;
let maxTemp = 100;

// Function to generate random weather forecasts for each day
function generateWeather() {
    // Loop through each day in the 'days' array
    for (let i = 0; i < days.length; i++) {
        // Randomly select a weather condition for the current day
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];

        // Generate a random temperature within the specified range
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        // Display the weather forecast for the current day in the HTML element with id "5DayWeather"
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

// Call the function to generate weather forecasts
generateWeather();
