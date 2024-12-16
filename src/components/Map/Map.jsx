import { MapContainer, TileLayer } from "react-leaflet";
import GepCoderMarker from "../GepCoderMarker/GepCoderMarker";
import "./Map.css"; 

const Map = ({ address, city, country }) => {
  return (
    <MapContainer
      center={[53, 35, 18.8]}
      zoom={1}
      scrollWheelZoom={false}
      className="map-container"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GepCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
