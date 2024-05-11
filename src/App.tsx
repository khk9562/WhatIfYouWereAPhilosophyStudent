import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Result from "./pages/Result";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize(`${process.env.REACT_PUBLIC_GA_ID}`);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/select" element={<Select />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
