import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PropertyComponent from "./components/Property/PropertyComponent";
import Footer from "./components/footer/Footer";
import ContactPage from "./components/Contact/ContactPage";
import logokeys from "./assets/images/logokeys.png";
import OurServices from "./components/myservices/OurServices";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowWelcome(true);
    }, 3000); 

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000); 

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
          <OurServices />
          <PropertyComponent />
          <ContactPage />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
