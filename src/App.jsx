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
  const [appPhase, setAppPhase] = useState(() => {
    return sessionStorage.getItem("loaderDisplayed") === "true"
      ? "home"
      : "loading";
  });

  useEffect(() => {
    if (appPhase === "loading") {
      const loaderTimer = setTimeout(() => {
        setAppPhase("welcome");
        sessionStorage.setItem("loaderDisplayed", "true");
      }, 3000);

      return () => clearTimeout(loaderTimer);
    }

    if (appPhase === "welcome") {
      const welcomeTimer = setTimeout(() => {
        setAppPhase("home");
      }, 2000);

      return () => clearTimeout(welcomeTimer);
    }
  }, [appPhase]);

  return (
    <div className="App">
      {appPhase === "loading" && <Loader />}
      {appPhase === "welcome" && (
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
      {appPhase === "home" && (
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
