import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "New York",
    date: "Monday 09:28",
    description: "broken clouds",
    humidity: 51,
    wind: 8,
    temperature: -1,
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
  };
  return (
    <div className="App">
      <div className="weather-app">
        <form className="search-form">
          <div className="row">
            <div className="col-sm-9">
              <input
                type="text"
                placeholder="Enter a city..."
                autoFocus="on"
                autoComplete="off"
                class="form-control"
              ></input>
            </div>
            <div className="col-sm-3">
              <input
                id="submit"
                type="submit"
                value="Search"
                class="form-control btn btn-primary shadow-sm"
              ></input>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-md-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Last updated:<span>{weatherData.date}</span>
              </li>

              <li>{weatherData.description}</li>
              <li>
                Humidity: <strong>{weatherData.humidity}%</strong>
              </li>
              <li>
                Wind: <strong className="wind">{weatherData.wind} km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="temperature-container d-flex justify-content-end">
              <img src={weatherData.imgUrl} alt="broken clouds"></img>
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">°C </span>
            </div>
          </div>
        </div>
        <div className="weather-forecast">
          <div className="row">
            <div className="col-3">
              <div className="forecast-day">Mon</div>
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt={weatherData.description}
                width="38"
              ></img>
              <div className="forecast-temperature">
                <span className="forecast-temp-max">8°</span>
                <span className="forecast-temp-min">-2°</span>
              </div>
            </div>

            <div className="col-3">
              <div className="forecast-day">Tue</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="38"
              ></img>
              <div className="forecast-temperature">
                <span className="forecast-temp-max">6°</span>
                <span className="forecast-temp-min">3°</span>
              </div>
            </div>

            <div className="col-3">
              <div className="forecast-day">Wed</div>
              <img
                src="http://openweathermap.org/img/wn/04d@2x.png"
                alt=""
                width="38"
              ></img>
              <div className="forecast-temperature">
                <span className="forecast-temp-max">10°</span>
                <span className="forecast-temp-min">5°</span>
              </div>
            </div>

            <div className="col-3">
              <div className="forecast-day">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                width="38"
              ></img>
              <div className="forecast-temperature">
                <span className="forecast-temp-max">6°</span>
                <span className="forecast-temp-min">5°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href=" https://github.com/Zagranychna/hwweek4">Open-source code</a> by
      Oksana Zagranychna
    </div>
  );
}
