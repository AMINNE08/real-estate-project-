import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../shared/api";
import { PuffLoader } from "react-spinners";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import Map from "../components/Map/Map";
import "../styles/Property.css";
import { useEffect, useState } from "react";
import BookingModal from "../components/BookingModel/BookingModal";
import { toast } from "react-toastify";

export function Property() {
  const [token, setToken] = useState(null);
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id));

  const [modalOpened, setModalOpened] = useState(false);
  console.log("Property Component Rendered. Property ID:", id);

  // Function to handle the button click for booking
  const handleBookVisitClick = () => {
    console.log("Book the visit button clicked");
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      console.log("User not logged in. Prompting login.");
      toast.error("You must login first", { position: "bottom-right" });
    } else {
      setModalOpened(true);
      console.log("Opening Booking Modal for property:", id);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    console.log("Token in useEffect:", storedToken);
  }, []);

  if (isLoading) {
    console.log("Fetching property data...");
    return (
      <div className="flex-center">
        <PuffLoader height="80" width="80" radius={1} color="#555" aria-label="puff-loading" />
      </div>
    );
  }

  if (isError) {
    console.error("Error fetching property data for ID:", id);
    return <div className="flex-center">Error while fetching data</div>;
  }

  return (
    <section className="section-container">
      <div className="image-container">
        <img src={data?.image} alt={data?.title} className="property-image" />
      </div>

      <div className="property-info">
        <div>
          <h5 className="property-city">{data?.city}</h5>
          <div className="property-header">
            <h4 className="property-title">{data?.title}</h4>
            <div className="property-price">${data?.price || "N/A"}.00</div>
          </div>

          <div className="facilities-container">
            <div className="facility-item">
              <MdOutlineBed />
              {data?.facilities?.bedrooms || "N/A"}
            </div>
            <div className="facility-item">
              <MdOutlineBathtub />
              {data?.facilities?.bathrooms || "N/A"}
            </div>
            <div className="facility-item">
              <MdOutlineGarage />
              {data?.facilities?.parkings || "N/A"}
            </div>
            <div className="facility-item">
              <CgRuler />
              400
            </div>
          </div>

          <p className="property-description">{data?.description || "No description available."}</p>
          <div className="location-container">
            <FaLocationDot />
            <div>
              {data?.address}, {data?.city}, {data?.country}
            </div>
          </div>
          <div className="action-buttons">
            <button onClick={handleBookVisitClick} className="book-visit-btn">
              Book the visit
            </button>

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={data?.email || ""}
              token={token}
            />
          </div>
        </div>

        <div>
          <Map address={data?.address} city={data?.city} country={data?.country} />
        </div>
      </div>
    </section>
  );
}
