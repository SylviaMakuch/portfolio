import React from "react";
import MainPage from "./components/MainPage.js";
import Resume from "./components/Resume.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<MainPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
