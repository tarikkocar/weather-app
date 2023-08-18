import { getWeatherForecast, getLocation, getCityFromIP } from "./apiFunctions";
import * as dataConverters from "./dataConverters";

const weatherMain = document.querySelector(".weather-main");
const weatherDetails = document.querySelector(".weather-details");
const forecast = document.querySelector(".forecast");

async function loadHomePage() {
  const city = await getCityFromIP();
  showWeatherMain(city);
  showWeatherDetails(city);
}

async function displayLocation(city) {
  const locationData = await dataConverters.getCity(city);
  const location = weatherMain.querySelector(".location");
  location.textContent = locationData;
}

async function displayCondition(city) {
  const conditionData = await dataConverters.getCondition(city);
  const condition = weatherMain.querySelector(".condition");
  condition.textContent = conditionData;
}

async function displayConditionIcon(city) {
  const conditionIconData = await dataConverters.getConditionIcon(city);
  const conditionIcon = weatherMain.querySelector(".condition");
  conditionIcon.textContent = conditionIconData;
}

async function displayTemperature(city) {
  const temperatureData = await dataConverters.getCurrentTemperatureC(city);
  const temperature = weatherMain.querySelector(".temperature");
  temperature.textContent = `${temperatureData} °C`;
}

async function displayDate(city) {
  const dateData = await dataConverters.getDate(city);
  const date = weatherMain.querySelector(".date");
  date.textContent = dateData;
}

async function displayFeelsLike(city) {
  const feelsLikeData = await dataConverters.getFeelsLikeC(city);
  const feelsLike = weatherDetails.querySelector(".feels-like");
  feelsLike.textContent = `${feelsLikeData} °C`;
}

async function displayHumidity(city) {
  const humidityData = await dataConverters.getHumidity(city);
  const humidity = weatherDetails.querySelector(".humidity");
  humidity.textContent = `${humidityData}%`;
}

async function displayChanceOfRain(city) {
  const chanceOfRainData = await dataConverters.getChanceOfRain(city);
  const chanceOfRain = weatherDetails.querySelector(".chance-rain");
  chanceOfRain.textContent = `${chanceOfRainData}%`;
}

async function displayWindSpeed(city) {
  const windSpeedData = await dataConverters.getWindSpeedMetric(city);
  const windSpeed = weatherDetails.querySelector(".wind-speed");
  windSpeed.textContent = `${windSpeedData} km/h`;
}

async function displayUVIndex(city) {
  const uvIndexData = await dataConverters.getUVIndex(city);
  const uvIndex = weatherDetails.querySelector(".uv-index");
  uvIndex.textContent = uvIndexData;
}

function showWeatherMain(city) {
  displayLocation(city);
  displayCondition(city);
  // displayConditionIcon(city);
  displayTemperature(city);
  displayDate(city);
}

function showWeatherDetails(city) {
  displayFeelsLike(city);
  displayHumidity(city);
  displayChanceOfRain(city);
  displayWindSpeed(city);
  displayUVIndex(city);
}

// function showWeatherForecast() {}

const weatherData = await getWeatherForecast("london");
console.log(weatherData);

export { loadHomePage };
