import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalProvider } from "./contexts/AnimalContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimalProvider>
        <App />
      </AnimalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
