import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
import { BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
