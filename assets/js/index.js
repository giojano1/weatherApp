// Your API key from weatherapi.com
const apiKey = "2b7a339c7a61413a8cf182354241905";

// The endpoint for current weather data
const endpoint = "http://api.weatherapi.com/v1/current.json";

// The city for which you want to fetch the weather
const city = "London";

// Construct the full URL with the endpoint, API key, and city
const url = `${endpoint}?key=${apiKey}&q=${city}`;

// Fetch the data
fetch(url)
  .then((response) => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    // Handle the data
    console.log(data);
    // You can now use the weather data, for example:
    const weather = data.current;
    console.log(`Temperature in ${city}: ${weather.temp_c}°C`);
  })
  .catch((error) => {
    // Handle any errors that occur during fetch
    console.error("There has been a problem with your fetch operation:", error);
  });
