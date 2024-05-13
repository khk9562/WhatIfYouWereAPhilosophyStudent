import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Select from "./pages/Select";
import Result from "./pages/Result";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(`${process.env.REACT_PUBLIC_GA_ID}`);
  }, []);

  useEffect(() => {
    if (location.pathname === "/result") {
      ReactGA.send({
        hitType: "pageview",
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/select" element={<Select />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
