import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/ResetPage.css'; 
import api from '../shared/api'

export default function ResetPage() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const id = query.get('id');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await api.post('/auth/reset-password', {
        token,
        id,
        newPassword,
      });
      setSuccess(response.data.message); 
    } catch (err) {
      setError(err.response?.data.message || 'An error occurred while resetting the password.');
    }
  };

  return (
    <div className="containerR">
      <div className="form-containerR">
        <h2 className="titleR">Reset Password</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} 
        {success && <p style={{ color: 'green' }}>{success}</p>} 
        <form onSubmit={handleSubmit}>
          <div className="input-groupR">
            <label className="labelR">New Password:</label>
            <input
              type="password"
              placeholder="New Password"
              className="inputR"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-groupR">
            <label className="labelR">Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputR"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className='rbtn'>
          <button type="submit" className="buttonR">Reset Password</button>
          <Link to={"/"}>
          <button className='buttonR'> Back Home</button>
          </Link>
          </div>
         
          
        </form>
      </div>
    </div>
  );
}
