import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PropertyComponent from "./components/Property/PropertyComponent";
import Footer from "./components/footer/Footer";
import ContactPage from "./components/Contact/ContactPage";
import ServicesCarousel2 from "./components/servicesComponont/ServicesCarousel2";

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
          <div className="serviceshide"><h1>Our Services</h1></div>
         <ServicesCarousel2/>
          <PropertyComponent></PropertyComponent>
          <ContactPage></ContactPage>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
