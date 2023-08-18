import { getWeatherForecast } from "./apiFunctions";
import { format } from "date-fns";

async function getCity(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.location.name;
}

async function getCondition(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.condition.text;
}

async function getConditionIcon(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.condition.icon;
}

async function getCurrentTemperatureC(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.temp_c;
}

async function getCurrentTemperatureF(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.temp_f;
}

async function getDate(city) {
  const weatherData = await getWeatherForecast(city);
  const date = new Date(weatherData.location.localtime);
  return format(date, "EEEE, do MMM yy");
}

async function getFeelsLikeC(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.feelslike_c;
}

async function getFeelsLikeF(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.feelslike_f;
}

async function getHumidity(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.humidity;
}

async function getChanceOfRain(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
}

async function getWindSpeedMetric(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.wind_kph;
}

async function getWindSpeedImperial(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.wind_mph;
}

async function getUVIndex(city) {
  const weatherData = await getWeatherForecast(city);
  return weatherData.current.uv;
}

export {
  getCity,
  getCondition,
  getConditionIcon,
  getCurrentTemperatureC,
  getCurrentTemperatureF,
  getDate,
  getFeelsLikeC,
  getFeelsLikeF,
  getHumidity,
  getChanceOfRain,
  getWindSpeedMetric,
  getWindSpeedImperial,
  getUVIndex,
};
