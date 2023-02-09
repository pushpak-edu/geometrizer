import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputRadius, setInputRadius] = React.useState("");
  const [result, setResult] = React.useState("");

  return (
    <div className="App">

      <p className="title">The Geometrizer by (Pushpak - 591)</p>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            Radius :
          </p>
        </p>
        <input
          className="buttonStyle"
          onChange={(e) => setInputRadius(e.target.value)}
          value={inputRadius}
          type="text">
        </input>
      </div>

      <div className="numbers">
        <button className="buttonStyle" 
        onClick={() => setResult("The circumference is " + Math.round(((Math.PI * 2*inputRadius) + Number.EPSILON) * 100) / 100 )}
        type="button">Circumference</button>
        <button className="buttonStyle" 
        onClick={() => setResult("The area is " + Math.round(((Math.PI * inputRadius * inputRadius) + Number.EPSILON) * 100) / 100)}
        type="button">Area</button>
      </div>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            The Geometrizer is :
          </p>
        </p>
        <p className="buttonStyle">
          {result}
        </p>
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, rootElement);
