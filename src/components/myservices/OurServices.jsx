import ServiceCard from './ServiceCard';
import BuyImage from '../../shared/images/buy.webp'; 
import SellImage from '../../shared/images/sell.webp';
import RentImage from '../../shared/images/rent.webp';
import '../myservices/OurServices.css'
const OurServices = () => {
  const services = [
    {
      image: BuyImage,
      title: 'Buy a home',
      description:
        'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
      buttonText: 'Browse homes',
    },
    {
      image: SellImage,
      title: 'Sell a home',
      description:
        'No matter what path you take to sell your home, we can help you navigate a successful sale.',
      buttonText: 'See your options',
    },
    {
      image: RentImage,
      title: 'Rent a home',
      description:
        'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
      buttonText: 'Find rentals',
    },
  ];

  return (
    <div className="our-services">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image }
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
        />
      ))}
    </div>
  );
};

export default OurServices;
