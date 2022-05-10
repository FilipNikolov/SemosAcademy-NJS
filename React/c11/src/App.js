import React from "react";
import { Cake } from "./components/Cake";
import { Routes, Route } from "react-router-dom";


export function App() {
  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
      </Routes>
    </div>
  )
}