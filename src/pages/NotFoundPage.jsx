import { useNavigate } from 'react-router-dom';
import '../styles/NotFoundPage.css'; // Import the CSS file for styling
import logo from '../assets/images/logo.png'; // Import your logo image

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="not-found">
      {/* Logo Section */}
      <div className="not-found-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="not-found-content">
        <button onClick={handleGoBack} className="back-home-button">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
