import { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PropertyComponent from "./components/Property/PropertyComponent";
import Footer from "./components/footer/Footer";
import logokeys from "./assets/images/logokeys.png";
import OurServices from "./components/myservices/OurServices";
import { login } from "./redux/userSlice";  
import { useDispatch } from "react-redux";
import ContactComp from "./components/Contact/ContactComp";
import "./config/i18n";
import { useTranslation } from "react-i18next";



function App() {
  const { t } = useTranslation();
  const [appPhase, setAppPhase] = useState(() => {
    return sessionStorage.getItem("loaderDisplayed") === "true"
      ? "home"
      : "loading";
  });

  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    // Load the user from localStorage into Redux if it exists
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromLocalStorage) {
      dispatch(login(userFromLocalStorage));
    }
  }, [dispatch]);

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
            <h1>{t("Our Services")}</h1>
          </div>
          <OurServices />
          <PropertyComponent />
          <ContactComp />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
