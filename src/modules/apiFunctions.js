async function getWeatherForecast(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f37b33f5508a4559baa174644231708&q=${city}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const forecastData = await response.json();
  return forecastData;
}

async function getLocation() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/ip.json?key=f37b33f5508a4559baa174644231708&q=auto:ip`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const forecastData = await response.json();
  return forecastData;
}

async function getCityFromIP() {
  const location = await getLocation();
  const ipAddress = location.ip;
  const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
  const locationData = await response.json();
  return locationData.city;
}

export { getWeatherForecast, getLocation, getCityFromIP };
