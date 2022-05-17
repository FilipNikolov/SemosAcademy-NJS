import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Cities } from "./components/Cities";
import "./css/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/cities" element={<Cities />} />
      </Route>
    </Routes>
  </Router>
)