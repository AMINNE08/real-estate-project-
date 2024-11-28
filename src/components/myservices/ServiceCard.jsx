const ServiceCard = ({ image, title, description, buttonText }) => {
    return (
      <div className="service-card">
        <img src={image} alt={title} className="service-image"/>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="service-button">{buttonText}</button>
      </div>
    );
  };
  
  export default ServiceCard;
  