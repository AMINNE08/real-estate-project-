import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/ResetPage.css'; 

export default function ResetPage() {
  const location = useLocation();

  // Get the token and user ID from the query parameters
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const id = query.get('id');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send reset password request to the backend
      const response = await axios.post('http://localhost:3000/api/v1/auth/reset-password', {
        token,
        id,
        newPassword,
      });
      setSuccess(response.data.message); // Display success message
    } catch (err) {
      // Handle error from the backend
      setError(err.response?.data.message || 'An error occurred while resetting the password.');
    }
  };

  return (
    <div className="containerR">
      <div className="form-containerR">
        <h2 className="titleR">Reset Password</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}
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
          <button type="submit" className="buttonR">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
