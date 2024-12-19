import ServiceCard from './ServiceCard';
import BuyImage from '../../assets/images/buy.webp'; 
import SellImage from '../../assets/images/sell.webp';
import RentImage from '../../assets/images/rent.webp';
import '../myservices/OurServices.css';
import { useTranslation } from 'react-i18next';

const OurServices = () => {
  const { t } = useTranslation(); // Import the translation hook

  const services = [
    {
      image: BuyImage,
      title: t('Buy a home'),
      description: t(
        'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.'
      ),
      buttonText: t('Browse homes'),
      link: '/bRPage',
    },
    {
      image: SellImage,
      title: t('Sell a home'),
      description: t(
        'No matter what path you take to sell your home, we can help you navigate a successful sale.'
      ),
      buttonText: t('See your options'),
      link: '/Sell',
    },
    {
      image: RentImage,
      title: t('Rent a home'),
      description: t(
        'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.'
      ),
      buttonText: t('Find rentals'),
      link: '/bRPage',
    },
  ];

  return (
    <div className="our-services">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default OurServices;
