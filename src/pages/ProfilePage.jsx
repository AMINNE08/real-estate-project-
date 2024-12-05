import { useNavigate } from "react-router";
import "../styles/profilePage.css";
import api from "../utils/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import noAvatar from "../shared/images/noavatar.jpg";

function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);

  // Log currentUser data for debugging
  console.log("ProfilePage currentUser:", currentUser);
  if (currentUser) {
    console.log("Username:", currentUser.username);
    console.log("Email:", currentUser.email);
    console.log("Phone:", currentUser.phone);
  } else {
    console.log("No user data available.");
  }

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  if (!currentUser) {
    return <div>Loading user information...</div>;
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || noAvatar} alt="Avatar" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <span>
              Phone: <b>{currentUser.phone}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
