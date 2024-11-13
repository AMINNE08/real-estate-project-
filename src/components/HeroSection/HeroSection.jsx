import Typewriter from 'typewriter-effect';
import '../HeroSection/HeroSection.css';
import heroimag from '../HeroSection/Final.png';

const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      <div className="left">
        <h1>Manage Your Property</h1>
        <h2>Your trusted platform for reliable properties</h2>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: [
                'Looking for a new home?',
                'Verified properties, trusted by many.',
                'Start your property search now!',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
            }}
          />
        </div>
        <div className="cta-input">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="cta-button">Get a Quote</button>
        </div>
      </div>
      <div className="right">
        <img src={heroimag} alt="Property" className="floating-image" />
      </div>
    </div>
    <div className='section'></div>
    </>
  );
};

export default HeroSection;
