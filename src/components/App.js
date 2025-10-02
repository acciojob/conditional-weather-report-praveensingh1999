import React, { useState, useEffect } from "react";
import './../styles/App.css';
import Weather from "./Weather";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: ""
  });

  useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
