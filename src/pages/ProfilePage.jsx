import "../styles/profilePage.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import noAvatar from "../shared/images/noavatar.jpg";
import { Link } from "react-router-dom";
function ProfilePage() {
    const {currentUser}=useContext(AuthContext)

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/updateProfile">
            <button>Update Profile</button>
            </Link>
            
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
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
