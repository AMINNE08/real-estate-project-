import { Link } from "react-router-dom";
import "../welcom hero/Whero.css";

export default function Whero() {
  return (
    <section className="whero-container">
      <div className="whero-background">
        <div className="whero-content">
          <span className="whero-subtitle">Welcome to CasaCentral</span>
          <h1 className="whero-title">Discover Exceptional Homes with CasaCentral</h1>
          <p className="whero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptatibus eius odit inventore nihil, laborum reiciendis
            accusantium voluptas quasi nisi possimus distinctio aliquam atque
            incidunt voluptates! Animi corporis dignissimos id!
          </p>
          <div className="whero-offer">
            <div className="woffer-text">
              <h5>10% Off</h5>
              <p>On All Properties</p>
            </div>
            <Link to="/listing" className="whero-button">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
