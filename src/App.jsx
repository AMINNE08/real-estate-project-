import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PropertyComponent from "./components/Property/PropertyComponent";
import Footer from "./components/footer/Footer";
import ContactPage from "./components/Contact/ContactPage";
import ServicesCarousel2 from "./components/servicesComponont/ServicesCarousel2";
import logokeys from "./components/navbar/logokeys.png";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show the loader for 3 seconds
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowWelcome(true);
    }, 3000); // Matches the loader's animation duration

    // Show the welcome message for 2 seconds, then show the main content
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000); // 2 seconds after the loader ends

    // Clean up timers
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
            <h1>Welcome</h1>
            <img
              className="logoanimation"
              src={logokeys}
              alt=""
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </div>
      )}
      {!showLoader && !showWelcome && (
        <div className="homepage">
          <Navbar />
          <HeroSection />
          <div className="serviceshide">
            <h1>Our Services</h1>
          </div>
          <ServicesCarousel2 />
          <PropertyComponent />
          <ContactPage />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
