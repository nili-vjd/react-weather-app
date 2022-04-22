import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/armita-vajed?originalSubdomain=ir"
            targe="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Armita Vajed{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/nili-vjd/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://earnest-pasca-0ddc95.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
