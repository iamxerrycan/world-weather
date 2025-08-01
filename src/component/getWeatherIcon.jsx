import clear from '../assets/icons/clear.png';
import clouds from '../assets/icons/cloud.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import defaultIcon from '../assets/icons/wind.png';

const getWeatherIcon = (condition) => {
  const key = condition.toLowerCase();
  if (key.includes('clear')) return clear;
  if (key.includes('cloud')) return clouds;
  if (key.includes('rain') || key.includes('drizzle')) return rain;
  if (key.includes('snow')) return snow;
  if (key.includes('thunder') || key.includes('storm')) return storm;
  return defaultIcon;
};

export default getWeatherIcon;
