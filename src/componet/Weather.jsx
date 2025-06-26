import React, { useState, useEffect } from 'react';
import './Weather.css';
// import windIcon from "../assetes/icons/winds.png";
// import humidityIcon from "../assetes/icons/humidity.png";
import getWeatherIcon from './Getweather';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('kolkata');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = () => {
    setLoading(true);
    const url = `https://rest-api-backend-lad4.onrender.com/weather?q=${city}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('City Not Found');
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
        setCity('');
      })
      .catch(() => {
        setError('City Not Found 😡');
        setTimeout(() => setError(null), 2500);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => setCity(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city');
      setTimeout(() => setError(null), 2000);
      return;
    }
    fetchWeather();
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWindDirection = (deg) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    return directions[Math.round(deg / 45) % 8];
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <div className="weather-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}

      {weatherData && !loading && (
        <div className="weather-card">
          <div className="weather-main">
            <img
              src={getWeatherIcon(weatherData.weather[0].main)}
              alt="Weather Icon"
              className="weather-icon"
            />
            <h2 className="temperature">
              {Math.round(weatherData.main.temp)}°C
            </h2>
            <p className="location">
              📍 {weatherData.name}, {weatherData.sys.country}
            </p>
            <p className="description">
              {weatherData.weather[0].main} -{' '}
              {weatherData.weather[0].description}
            </p>
          </div>

          <div className="weather-info">
            <div className="info-item">
              <div>
                <p className="info-value">{weatherData.main.humidity}%</p>
                <p className="info-label">Humidity</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">
                  {weatherData.wind.speed} km/h (
                  {getWindDirection(weatherData.wind.deg)})
                </p>
                <p className="info-label">Wind</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">{weatherData.visibility / 1000} km</p>
                <p className="info-label">Visibility</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">{weatherData.main.pressure} hPa</p>
                <p className="info-label">Pressure</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">
                  {Math.round(weatherData.main.feels_like)}°C
                </p>
                <p className="info-label">Feels Like</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">
                  {Math.round(weatherData.main.temp_min)}° /{' '}
                  {Math.round(weatherData.main.temp_max)}°
                </p>
                <p className="info-label">Min / Max</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">
                  {formatTime(weatherData.sys.sunrise)}
                </p>
                <p className="info-label">Sunrise</p>
              </div>
            </div>

            <div className="info-item">
              <div>
                <p className="info-value">
                  {formatTime(weatherData.sys.sunset)}
                </p>
                <p className="info-label">Sunset</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
