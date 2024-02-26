import React, { useState, useEffect } from "react";
import "./Weather.css";
import Clear_png from "../assetes/icons/clear.png";
import Cloud_png from "../assetes/icons/cloud.png";
import Rain_png from "../assetes/icons/rain.png";
import Storm_png from "../assetes/icons/storm.png";
import Swon_png from "../assetes/icons/snow.png";
import Haze_png from "../assetes/icons/haze.png";
import wind_png from "../assetes/icons/winf.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  console.log(city);

  const handlechange = (e) => {
    setCity(e.target.value);
  };

  const handlesearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-main">
      <div className="top-searchbar">
        <input
          type="text"
          placeholder="enter city"
          value={city}
          onChange={handlechange}
        />
        <button onClick={handlesearch}>Search</button>
      </div>
      <div className="weather-conatiner">
        <div className="weatherimg">
          <img src={Clear_png} />
        </div>
        <div className="weathertemp"> 24^</div>
        <div className="weatherlocation">
          <p> Laketown </p>
        </div>
        <div className="dataweather">
          <div className="element">
            <img src={Haze_png} className="icon" />
            <div className="data">
              <div className="humidity-perc">0%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_png} className="icon" />
            <div className="data">
              <div className="humidity-perc">8km/h</div>
              <div className="text">wind speed</div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Weather;
