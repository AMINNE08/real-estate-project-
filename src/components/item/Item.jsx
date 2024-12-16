import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";
// import HeartBtn from "./HeartBtn";
import { Link , useNavigate } from "react-router-dom";
import { CgRuler } from "react-icons/cg";
import "../item/Item.css"; 

export default function Item({ property }) {
  const navigate = useNavigate();


  return (
    <div onClick={()=> navigate(`../listing/${property._id}`)}   className="item-card">
      <div className="item-image-wrapper">
        <img src={property.image} alt={property.title} className="item-image" />
        <div className="heart-btn-wrapper">
          {/* <HeartBtn /> */}
        </div>
      </div>
      <h5 className="item-city">{property.city}</h5>
      <h4 className="item-title">{property.title}</h4>
      <div className="item-facilities">
        <div className="facility">
          <MdOutlineBed />
          {property.facilities.bedrooms}
        </div>
        <div className="facility">
          <MdOutlineBathtub />
          {property.facilities.bathrooms}
        </div>
        <div className="facility">
          <MdOutlineGarage />
          {property.facilities.parkings}
        </div>
        <div className="facility">
          <CgRuler />
          400
        </div>
      </div>
      <p className="item-description">{property.description}</p>
      <div className="item-footer">
        <div className="item-price">${property.price}.00</div>
        <Link to="/">
          <button className="view-details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}
