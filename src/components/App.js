import React, { useState } from "react";


const App = () => {
  let obj = {
    temperature: 25, 
    conditions: "Sunny" 
  };

  
  return (
    <div>
      <h2>Weather App</h2>
      <p style = {{color : obj.temperature > 20 ?  "red" : "blue"}}>Temperature: {obj.temperature}°C</p>
      <p style = {{color: "red"}}>Conditions: {obj.conditions}</p>

      
    </div>
  );
}

export default App;
