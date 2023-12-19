import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ selectedLocation }) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const apiKey = 'b53a43afba94d247b1847981790f85de';

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&appid=${apiKey}`);

        if (response.data) {
          setWeatherInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (selectedLocation) {
      getWeatherData();
    }
  }, [selectedLocation, apiKey]);

  return (
    <div>
      <h3>Weather Information</h3>
      {weatherInfo ? (
        <div>
          <p>Location: {selectedLocation}</p>
          <p>Temperature: {weatherInfo.main.temp} °C</p>
          <p>Weather: {weatherInfo.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
