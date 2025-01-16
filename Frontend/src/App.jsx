// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoUpload from "./components/PhotoUpload";
import Header from "./components/Header";
import PhotoPage from "./components/PhotoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <Header />

        <Routes>
          <Route path="/upload" element={<PhotoUpload />} />
          <Route path="/" element={<PhotoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
