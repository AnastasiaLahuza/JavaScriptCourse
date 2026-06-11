function showweatherDetails(event) {
    event.preventDefault();

// In JavaScript, the method preventDefault() is used inside an event handler to stop the browser's default action for that event from occurring.

// For example, in the context of a form submission:

// By default, when you submit a form, the browser reloads the page or navigates away.
// Calling event.preventDefault() inside the form's submit event handler prevents this page reload.

const city = document.getElementById('city').value;
const apiKey = '6de827fc1a98ee764214206cc00bbf6c';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})
//The &#8451; is an HTML character entity that represents the degree Celsius symbol (℃).
//Above function fetch initiates an asynchronous HTTP request to the specified apiUrl (OpenWeatherMap API) to retrieve weather data.

//Response handling is being utilized by promise with .then() to process the response by first converting it to JSON format response.json(), and then accessing the resulting data.

//HTMl file is also being Updated the HTML content dynamically by selecting the 'weatherInfo' element, populating it with structured weather information such as city name data.name, temperature data.main.temp, and weather description data.weather[0].description, ensuring a user-readable display of fetched weather details on the webpage.

//Then include below give code outside the function. It attaches an event listener to the 'weatherForm' element, listening for a 'submit' event and triggering the showweatherDetails function upon form submission, enabling customized handling or manipulation of the form's behavior.

.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });

}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );




