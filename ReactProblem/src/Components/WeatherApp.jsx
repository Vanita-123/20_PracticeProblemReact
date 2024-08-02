import { useEffect, useState } from "react";

function WeatherApp() {
  const [weather, setweather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((postion) => {
        const longitude = postion.coords.longitude;
        const latitude = postion.coords.latitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ec21f814bd6237785264bdb40e5293f3`
        )
          .then((response) => response.json())
          .then((data) => setweather(data));
      });
    }
  }, []);

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      {weather ? (
        <div style={{ margin: "10px" }}>
          <h1>Current Weather</h1>
          <p>
            Temperature:{" "}
            <span style={{ color: "blue" }}>{weather.main.temp}</span>
          </p>
          <p>
            Conditions:{" "}
            <span style={{ color: "blue" }}>
              {weather.weather[0].description}
            </span>
          </p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default WeatherApp;
