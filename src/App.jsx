import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Program from "./pages/Program.jsx";
import PieceDetail from "./pages/PieceDetail.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-body text-ink">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/piece/:id" element={<PieceDetail />} />
        </Routes>
      </main>
    </div>
  );
}
