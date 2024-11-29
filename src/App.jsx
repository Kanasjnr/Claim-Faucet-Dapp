import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./config/connection";
import Navigation from "./components/Navigation";
import CreateFaucet from "./components/CreateFaucet";
import Faucets from "./components/Faucets";
import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreateFaucet />} />
            <Route path="/faucets" element={<Faucets />} />
          </Routes>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;

