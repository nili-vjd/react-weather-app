import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-cntrol"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Tehran</h1>
      <ul>
        <li>Tuesday 20:00</li>
        <li>Clear with periodic clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear with periodic clouds"
          />
          23°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li> Humidity: 10% </li>
            <li>Wind: 18 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
