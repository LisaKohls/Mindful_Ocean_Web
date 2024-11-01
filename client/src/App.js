import './output.css';
import MainLayout from "./components/MainLayout";
import React from "react";
import LandingPage from "./landingPageScrollEffect/LandingPage";

function App() {
  return (
      <div className="bg-primary text-white">
          <LandingPage />
          <MainLayout/>
      </div>
  );
}

export default App;
