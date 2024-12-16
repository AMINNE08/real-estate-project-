import { FaLocationDot } from "react-icons/fa6";
import "../SearchBar/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter residency name/city/country"
      />
      <FaLocationDot className="icon-s" />
    </div>
  );
}
