import React from "react";
import MainPage from "./components/MainPage.js";
import ContactForm from "./components/ContactForm.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<MainPage />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
