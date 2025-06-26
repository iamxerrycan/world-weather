import sun from "../assets/lottie/sun.json";
import rain from "../assets/lottie/rain.json";
import cloud from "../assets/lottie/cloud.json";
import storm from "../assets/lottie/storm.json";
import snow from "../assets/lottie/snow.json";

const getWeatherAnimation = (condition) => {
  const key = condition.toLowerCase();
  if (key.includes("clear")) return sun;
  if (key.includes("rain") || key.includes("drizzle")) return rain;
  if (key.includes("cloud")) return cloud;
  if (key.includes("thunder") || key.includes("storm")) return storm;
  if (key.includes("snow")) return snow;
  return cloud; // fallback
};

export default getWeatherAnimation;
