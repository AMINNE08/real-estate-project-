import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, buttonText, link }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>
        <button className="service-button">{buttonText}</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
