import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/select" element={<Select />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
