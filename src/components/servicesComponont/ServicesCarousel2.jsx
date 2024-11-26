// src/ServicesCarousel.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ServicesCarousel.css';
import buy from '../servicesComponont/buy.webp'
import rent from '../servicesComponont/rent.webp'
import sell from '../servicesComponont/sell.webp'

const services = [
  { title: 'Buy', image:buy , description: 'Find your dream home to buy.' },
  { title: 'Sell', image:sell, description: 'Sell your property easily and quickly.' },
  { title: 'Rent', image:rent , description: 'Explore rental properties near you.' },
];

const ServicesCarousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {services.map((service, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + services.length) % services.length;
          const isNext = index === (currentIndex + 1) % services.length;

          return (
            <motion.div
              key={index}
              className={`carousel-item ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src={service.image} alt={service.title} className="carousel-image" />
              {isActive && (
                <div className="carousel-description">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button onClick={() => window.location.href=`/${service.title.toLowerCase()}`} className="see-more-button">
                    See More
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      <button className="carousel-arrow left-arrow" onClick={prevSlide}>‹</button>
      <button className="carousel-arrow right-arrow" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ServicesCarousel2;
