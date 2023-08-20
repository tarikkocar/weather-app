import { getCityFromIP } from "./apiFunctions";
import * as dataConverters from "./dataConverters";

const weatherMain = document.querySelector(".weather-main");
const weatherDetails = document.querySelector(".weather-details");
const searchBar = document.querySelector("input");
const searchIcon = document.querySelector(".material-symbols-outlined");
const switchBtn = document.querySelector("button");
const errorMsg = document.querySelector(".error-msg");
let displayUnit = "°C";

async function loadHomePage() {
  const city = await getCityFromIP();
  showWeatherMain(city);
  showWeatherDetails(city);
  addPageEventListeners();
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
  const conditionIcon = weatherMain.querySelector(".condition-icon img");
  conditionIcon.setAttribute("src", conditionIconData);
}

async function displayTemperature(city) {
  if (displayUnit === "°C") {
    const temperatureData = await dataConverters.getCurrentTemperatureC(city);
    const temperature = weatherMain.querySelector(".temperature");
    temperature.textContent = `${Math.round(temperatureData)} °C`;
  } else {
    const temperatureData = await dataConverters.getCurrentTemperatureF(city);
    const temperature = weatherMain.querySelector(".temperature");
    temperature.textContent = `${Math.round(temperatureData)} °F`;
  }
}

async function displayDate(city) {
  const dateData = await dataConverters.getDate(city);
  const date = weatherMain.querySelector(".date");
  date.textContent = dateData;
}

async function displayFeelsLike(city) {
  if (displayUnit === "°C") {
    const feelsLikeData = await dataConverters.getFeelsLikeC(city);
    const feelsLike = weatherDetails.querySelector(".feels-like-value");
    feelsLike.textContent = `${Math.round(feelsLikeData)} °C`;
  } else {
    const feelsLikeData = await dataConverters.getFeelsLikeF(city);
    const feelsLike = weatherDetails.querySelector(".feels-like-value");
    feelsLike.textContent = `${Math.round(feelsLikeData)} °F`;
  }
}

async function displayHumidity(city) {
  const humidityData = await dataConverters.getHumidity(city);
  const humidity = weatherDetails.querySelector(".humidity-value");
  humidity.textContent = `${humidityData}%`;
}

async function displayChanceOfRain(city) {
  const chanceOfRainData = await dataConverters.getChanceOfRain(city);
  const chanceOfRain = weatherDetails.querySelector(".chance-rain-value");
  chanceOfRain.textContent = `${chanceOfRainData}%`;
}

async function displayWindSpeed(city) {
  if (displayUnit === "°C") {
    const windSpeedData = await dataConverters.getWindSpeedMetric(city);
    const windSpeed = weatherDetails.querySelector(".wind-speed-value");
    windSpeed.textContent = `${windSpeedData} km/h`;
  } else {
    const windSpeedData = await dataConverters.getWindSpeedImperial(city);
    const windSpeed = weatherDetails.querySelector(".wind-speed-value");
    windSpeed.textContent = `${windSpeedData} mph`;
  }
}

async function displayUVIndex(city) {
  const uvIndexData = await dataConverters.getUVIndex(city);
  const uvIndex = weatherDetails.querySelector(".uv-index-value");
  const uvIndexDescriptor = document.createElement("span");
  uvIndexDescriptor.textContent = getUVIndexDescriptor(uvIndexData);
  uvIndex.textContent = uvIndexData;
  uvIndex.appendChild(uvIndexDescriptor);
}

function getUVIndexDescriptor(uvIndex) {
  if (uvIndex >= 0 && uvIndex <= 2) {
    return "Low";
  } else if (uvIndex >= 3 && uvIndex <= 5) {
    return "Moderate";
  } else if (uvIndex >= 6 && uvIndex <= 7) {
    return "High";
  } else if (uvIndex >= 8 && uvIndex <= 10) {
    return "Very High";
  } else {
    return "Extreme";
  }
}

async function showWeatherMain(city) {
  try {
    errorMsg.style.display = "none";
    await displayLocation(city);
    await displayCondition(city);
    await displayConditionIcon(city);
    await displayTemperature(city);
    await displayDate(city);
  } catch {
    errorMsg.style.display = "block";
  }
}

async function showWeatherDetails(city) {
  try {
    errorMsg.style.display = "none";
    await displayFeelsLike(city);
    await displayHumidity(city);
    await displayChanceOfRain(city);
    await displayWindSpeed(city);
    await displayUVIndex(city);
  } catch {
    errorMsg.style.display = "block";
  }
}

function addPageEventListeners() {
  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const searchTerm = searchBar.value;
      showWeatherMain(searchTerm);
      showWeatherDetails(searchTerm);
    }
  });

  searchIcon.addEventListener("click", () => {
    const searchTerm = searchBar.value;
    showWeatherMain(searchTerm);
    showWeatherDetails(searchTerm);
  });

  switchBtn.addEventListener("click", (e) => {
    const currentLocation = document.querySelector(".location").textContent;
    if (e.target.textContent === "°F") {
      displayUnit = "°F";
      e.target.textContent = "°C";
      showWeatherMain(currentLocation);
      showWeatherDetails(currentLocation);
    } else {
      displayUnit = "°C";
      e.target.textContent = "°F";
      showWeatherMain(currentLocation);
      showWeatherDetails(currentLocation);
    }
  });
}

export { loadHomePage };
