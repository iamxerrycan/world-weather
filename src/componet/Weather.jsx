import React, { useState, useEffect } from "react";
import "./Weather.css";
import Clear_png from "../assetes/icons/clear.png";
import Cloud_png from "../assetes/icons/cloud.png";
import Rain_png from "../assetes/icons/rain.png";
import Storm_png from "../assetes/icons/storm.png";
import Snow_png from "../assetes/icons/snow.png";
import Haze_png from "../assetes/icons/haze.png";
import wind_png from "../assetes/icons/winds.png";
import Humidity from "../assetes/icons/humidity.png";
import getWeatherIcon from "./Getweather";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("kolkata");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apikey = "4cdd5dee4b21790322c9993b89fb25d1";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

  const fetchWeather = () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })

      .then((data) => setWeatherData(data), setError(null))
      .catch((error) => setError("Not Found") ,setTimeout(() => {
        setError(null)
      }, 2000))

      .finally(() => {
        setLoading(false);
      });
  };

  const handlechange = (e) => {
    setCity(e.target.value);
  };

  const handlesearch = (e) => {
    e.preventDefault();
    if (!city) {
      setError("😡");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      fetchWeather();
      setCity("");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="container-main">
      <div className="top-searchbar">
        <input
          type="text"
          placeholder="enter city"
          value={city}
          onChange={handlechange}
        />

        <button onClick={handlesearch}>
          {error ? <span>{error}</span> : "Search"}
        </button>
        {/* {error && <span style={{ backgroundColor: "" }}>{error}</span>} */}
      </div>

      <div className="weather-conatiner">
        {weatherData && (
          <div className="weatherimg">
            <img
              src={getWeatherIcon(weatherData.weather[0].main)}
              alt="Weather Icon"
            />
          </div>
        )}

        {weatherData && (
          <div className="weathertemp">
            {Math.round(weatherData.main.temp)}°C
          </div>
        )}
        <div className="weatherlocation">
          {weatherData && <p>Place-{weatherData.name}</p>}
        </div>
        <div className="dataweather">
          <div className="element">
            <img src={Humidity} className="icon" />
            <div className="data">
              {weatherData && (
                <div className="humidity-perc">
                  {weatherData.main.humidity} %{" "}
                </div>
              )}
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_png} className="icon" />
            <div className="data">
              {weatherData && (
                <div className="humidity-perc">
                  {weatherData.wind.speed} km/h
                </div>
              )}

              <div className="text">speed</div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Weather;
