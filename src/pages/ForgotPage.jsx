import { useState } from 'react';
import forgot from '../assets/images/forgot.svg';
import '../styles/ForgotPage.css'; 
import api from '../shared/api'

export default function ForgotPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('/auth/forgot-password', { email });
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
