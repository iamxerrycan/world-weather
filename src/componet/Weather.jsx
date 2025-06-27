// Weather.jsx
import React, { useState, useEffect } from 'react';
import './Weather.css';
import getWeatherIcon from './Getweather';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Kolkata');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchWeather = () => {
    setLoading(true);
    fetch(`https://rest-api-backend-lad4.onrender.com/weather?q=${city}`)
      .then((res) => {
        if (!res.ok) throw new Error('City Not Found');
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
        setCity('');
        setIsModalOpen(false);
      })
      .catch(() => {
        setError('City Not Found 😡');
        setTimeout(() => setError(null), 2500);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

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

  const getWindDirection = (deg) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(deg / 45) % 8];
  };

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="weather-app">
      {weatherData && !loading && (
        <div className="weather-container">
          <div className="right-section">
            <div className="greeting-bar">
              <div className="greet-location">
                📍 {weatherData.name}, {weatherData.sys.country}
              </div>
              <div className="greet-message">{getGreeting()}</div>
              <div className="greet-time">
                <button
                  className="search-trigger"
                  onClick={() => setIsModalOpen(true)}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="detailed-info">
              <h2>{Math.round(weatherData.main.temp)}°</h2>
              <span>💨 {weatherData.wind.speed} m/s</span>
              <span>💧 {weatherData.main.humidity}%</span>
              <p>Feels like {Math.round(weatherData.main.feels_like)}°</p>
              <p>{weatherData.weather[0].description}</p>
            </div>

            <div className="hourly-forecast">
              <div className="hour">
                <p>🌅 Sunrise</p>
                <p>{formatTime(weatherData.sys.sunrise)}</p>
              </div>
              <div className="hour">
                <p>🌇 Sunset</p>
                <p>{formatTime(weatherData.sys.sunset)}</p>
              </div>
              <div className="hour">
                <p>🧭 Wind Dir</p>
                <p>{getWindDirection(weatherData.wind.deg)}</p>
              </div>
              <div className="hour">
                <p>🔍 Visibility</p>
                <p>{weatherData.visibility / 1000} km</p>
              </div>
              <div className="hour">
                <p>🧊 Pressure</p>
                <p>{weatherData.main.pressure} hPa</p>
              </div>
              <div className="hour">
                <p>🌡️ Min / Max</p>
                <p>
                  {Math.round(weatherData.main.temp_min)}° /{' '}
                  {Math.round(weatherData.main.temp_max)}°
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
  <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
    <form
      className="modal-content"
      onSubmit={handleSearch}
      onClick={(e) => e.stopPropagation()} // prevent backdrop click
    >
     
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={handleChange}
        autoFocus
      />
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading"></div>}
      <div className='mdc'>
<button
        type="button"
        className="modal-close-btn"
        onClick={() => setIsModalOpen(false)}
      >
        ❌
      </button>
      <button type="submit">Search</button>

      </div>
       
    </form>
  </div>
)}

    </div>
  );
};

export default Weather;


