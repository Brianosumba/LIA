import axios from "axios"; // Importing the axios library for making HTTP requests
import { useState, useEffect } from "react"; // Importing React hooks for managing state and side effects
import "./Weather.css"; // Importing the CSS file for styling the Weather component

// The Weather component that displays weather information for a city
const Weather = () => {
  // `city` holds the name of the city to search for; it starts with a default value "Stockholm"
  const [city, setCity] = useState("Stockholm");

  // `weatherData` stores the weather information returned from the API
  const [weatherData, setWeatherData] = useState(null);

  // `loading` tracks whether the app is currently fetching data from the API
  const [loading, setLoading] = useState(false);

  // `error` stores any error message to display if the API call fails
  const [error, setError] = useState(null);

  // API key for accessing the OpenWeather API, stored securely in environment variables
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Function to fetch weather data for a given city name
  const fetchWeatherData = async (cityName) => {
    // Check if the API key is missing, and show an error if it is
    if (!API_KEY) {
      setError("API Key is missing or invalid."); // Set an error message
      setLoading(false); // Stop the loading spinner
      return; // Exit the function early
    }

    // Check if the city name is empty, and show an error if it is
    if (cityName.trim() === "") {
      setError("City name cannot be empty."); // Display an error for empty input
      return; // Exit the function early
    }

    // Set loading state to true before starting the API request
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      // Make a GET request to the OpenWeather API
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: cityName.trim(), // Trim whitespace from the city name
            units: "metric", // Use metric units for temperature (Celsius)
            lang: "en", // Set language for descriptions to English
            appid: API_KEY, // Pass the API key for authentication
          },
        }
      );

      // If the request is successful, store the weather data in state
      setWeatherData(response.data);
    } catch (err) {
      // Handle errors from the API
      if (err.response) {
        // If the API returns a 404 status, the city was not found
        setError(
          err.response.status === 404
            ? `City "${cityName}" not found. Please try another city.`
            : "Failed to fetch weather data. Please try again later."
        );
      } else {
        // Handle unexpected network or server errors
        setError("An unexpected error occurred. Please try again later.");
      }

      // Clear any previous weather data if the request fails
      setWeatherData(null);
    } finally {
      // Stop the loading spinner after the request completes
      setLoading(false);
    }
  };

  // Automatically fetch weather data for the default city ("Stockholm") when the component first loads
  useEffect(() => {
    fetchWeatherData(city);
  }, []); // Empty dependency array ensures this runs only once

  // Handle form submission when the user searches for a new city
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default browser behavior of refreshing the page

    if (city.trim() === "") {
      setError("Please enter a city."); // Show an error if the city input is empty
      return;
    }

    // Fetch weather data for the entered city
    fetchWeatherData(city);
  };

  // If the app is currently loading, show a loading message
  if (loading) return <p className="loading">Loading...</p>;

  // If there was an error, display the error message
  if (error) return <p className="error">Error: {error}</p>;

  // Render the weather app UI
  return (
    <div className="weather-app">
      {/* Search form where users can enter a city name */}
      <form onSubmit={handleSubmit} className="weather-app__form">
        <input
          type="text" // Input field for entering the city name
          placeholder="Search for a city..." // Placeholder text shown when the input is empty
          value={city} // Bind the input's value to the `city` state
          onChange={(e) => setCity(e.target.value)} // Update the `city` state as the user types
          className="weather-app__input" // CSS class for styling the input
        />
        <button type="submit" className="weather-app__button">
          Search
        </button>
      </form>

      {/* Display weather information if it is available */}
      {weatherData && (
        <div className="weather-app__info">
          <h1 className="weather-app__heading">
            Weather in {weatherData.name} {/* City name from the API data */}
          </h1>
          <h2 className="weather-app__temperature">
            {weatherData.main?.temp ?? "--"}°C {/* Temperature in Celsius */}
          </h2>

          <h3 className="weather-app_humidity">
            {" "}
            Humidity: {weatherData.main.humidity}
          </h3>
          <h4 className="weather-app_feelslike">
            Feels Like: {weatherData.main.feels_like}
          </h4>
          <h5 className="weather-app_pressure">
            Pressure: {weatherData.main.pressure}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`} // Weather icon from the API
            alt={weatherData.weather?.[0]?.description || "Weather icon"} // Description of the weather
            className="weather-app__icon" // CSS class for styling the icon
          />
          <p className="weather-app__description">
            {weatherData.weather?.[0]?.description ||
              "No description available"}{" "}
            {/* Weather description */}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather; // Export the Weather component for use in other parts of the app
