import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Select from "./pages/Select";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/select" element={<Select />} />
    </Routes>
  );
}

export default App;
