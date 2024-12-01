import { useState } from 'react';
import axios from 'axios';
import forgot from '../shared/images/forgot.svg';
import '../styles/ForgotPage.css'; 

export default function ForgotPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="containerF">
      <div className="image-containerF">
        <img src={forgot} alt="Forgot password" className="imageF" />
      </div>
      <div className="form-containerF">
        <h2 className="titleF">Mot de passe oublie</h2>
        <p className="labelF">Saisissez votre email :</p>
        <input
          type="email"
          placeholder="Email"
          className="inputF"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="buttonF" onClick={handleSubmit}>Réinitialiser le mot de passe</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
