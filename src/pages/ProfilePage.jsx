import "../styles/profilePage.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import noAvatar from "../shared/images/noavatar.jpg";
import { Link  } from "react-router-dom";
function ProfilePage() {
    const {currentUser}=useContext(AuthContext)
    console.log(currentUser); // Check if all properties are there

    if (!currentUser) {
      return <p>Loading...</p>; // Handle case when currentUser is null
    }
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
                <img
                  src={currentUser.profilePicture || noAvatar}
                  alt="Avatar"
                />
              </span>
              <span>
                Username: <b>{currentUser.username || 'N/A'}</b>
              </span>
              <span>
                Email: <b>{currentUser.email || 'N/A'}</b>
              </span>
              <span>
                Phone: <b>{currentUser.phone || 'N/A'}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ProfilePage;
