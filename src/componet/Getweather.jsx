import Clear_png from "../assetes/icons/clear.png";
import Cloud_png from "../assetes/icons/cloud.png";
import Rain_png from "../assetes/icons/rain.png";
import Storm_png from "../assetes/icons/storm.png";
import Snow_png from "../assetes/icons/snow.png";
import Haze_png from "../assetes/icons/haze.png";
import wind_png from "../assetes/icons/wind.png";

const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return Clear_png;
      case "Clouds":
        return Cloud_png;
      case "Rain":
        return Rain_png;
      case "Thunderstorm":
        return Storm_png;
      case "Snow":
        return Snow_png;
      case "Haze":
        return Haze_png;
      default:
        return Clear_png;
    }
  };

  export default getWeatherIcon;