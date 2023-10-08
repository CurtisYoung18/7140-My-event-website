// base URL of the Open Meteo API endpoint
const baseUrl = 'https://api.open-meteo.com/v1/forecast';

// query parameters as a JavaScript object
const queryParams = {
    latitude: -27.472984,
    longitude: 153.079169,
    current_weather: true,
};

// convert the query parameters
const queryString = new URLSearchParams(queryParams).toString();

// full URL with query parameters
// give a name to the url
const urlWithParams = baseUrl+"?"+queryString;

// request options
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

// make the fetch call
fetch(urlWithParams, requestOptions)
  // take the information from api and convert it into a JS Object
  .then(response => response.json())
  .then(data => {
        // store the weather data into a const variable
        const weather = data.current_weather
        // there is a variable 'temperature' in the url or in the data of 'weather'
        console.log("Current temperature: " + weather.temperature + "°C");
        const temperature_element = document.getElementById('current_temperature');
        const windspeed_element = document.getElementById('current_windspeed');
        temperature_element.innerText = weather.temperature + "°C";
        windspeed_element.innerText = weather.windspeed + "kph";
  })
  .catch(error => console.log('error', error));