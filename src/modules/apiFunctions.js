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
  try {
    const location = await getLocation();
    const ipAddress = location.ip;
    const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);

    if (response.status === 429) {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const locationData = await response.json();
      return locationData.city;
    }

    const locationData = await response.json();
    return locationData.city;
  } catch (error) {
    console.error("An error occurred:", error);
    return "London";
  }
}

export { getWeatherForecast, getLocation, getCityFromIP };
