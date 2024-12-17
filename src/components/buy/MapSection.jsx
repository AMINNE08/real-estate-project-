import { MapContainer, TileLayer } from "react-leaflet";
import GepCoderMarker from "../GepCoderMarker/GepCoderMarker";
import "../Map/Map.css";

const MapSection = ({ properties }) => {
  return (
    <MapContainer
      center={[37.7749, -122.4194]} // Default center (San Francisco or customize)
      zoom={10}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {properties.map((property) => {
        const address = `${property.address}, ${property.city}, ${property.country}`;
        return (
          <GepCoderMarker
            key={property._id}
            address={address}
          />
        );
      })}
    </MapContainer>
  );
};

export default MapSection;
