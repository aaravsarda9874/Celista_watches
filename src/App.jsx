import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BrandPage from "./pages/BrandPage"

/**
 * App root - routes:
 *  /        -> Home (brand list)
 *  /brand/:id -> BrandPage (dynamic)
 */
export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand/:id" element={<BrandPage />} />
        </Routes>
      </main>
    </div>
  );
}
