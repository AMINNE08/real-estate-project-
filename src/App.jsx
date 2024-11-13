import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PropertyComponent from "./components/Property/PropertyComponent";
import Footer from "./components/footer/Footer";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // First, show the loader for 6 seconds
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowWelcome(true);
    }, 6000);

    // After showing the welcome message, transition to the homepage
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 8000); // Adjust the delay as needed (e.g., 2 seconds for the welcome message)

    // Clean up timers on component unmount
    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  return (
    <div className="App">
      {showLoader && <Loader />}
      {!showLoader && showWelcome && (
        <div className="cont">
          <div className="welcome-message">
            <h1>Welcome to YAQIN</h1>
          </div>
        </div>
      )}
      {!showLoader && !showWelcome && (
        <div className="homepage">
          <Navbar />
          <HeroSection />
          {/* <RecentProjects></RecentProjects> */}
          <PropertyComponent></PropertyComponent>
          <Footer/>

        </div>
      )}
    </div>
  );
}

export default App;
