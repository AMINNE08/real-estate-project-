import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import api from "../shared/api";
import "../styles/UpdateProfile.css";

const UpdateProfile = () => {
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (userData?.user) {
      setFormData({
        username: userData.user.username || "",
        email: userData.user.email || "",
        phone: userData.user.phone || "",
      });
    }
  }, [userData]);

  const token = userData?.token;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/users/${userData.user.id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Profile updated successfully!");
      dispatch({ type: "user/login", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
      setFormData({
        username: response.data.username || "",
        email: response.data.email || "",
        phone: response.data.phone || "",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to update profile.");
    }
  };

  const handleCancel = () => {
    if (userData?.user){
      setFormData({
        username: userData.user.username || "",
        email: userData.user.email || "",
        phone: userData.user.phone || "",
      });
    }
    setIsEditing(false);
  };

  return (
    <div className="updateprofile">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            disabled={!isEditing}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </label>

        {isEditing ? (
          <div>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export default UpdateProfile;
