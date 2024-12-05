import  { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import ProfilePage from "./ProfilePage";
import { AuthContext } from "../context/AuthContext";

export default function WelcomePage() {
  const { currentUser } = useContext(AuthContext);

  console.log("WelcomePage currentUser:", currentUser); // Log current user here

  if (!currentUser) {
    console.warn("No user found in context. Redirecting to login...");
    return <div>Redirecting to login...</div>; // Handle case where user is not logged in
  }

  return (
    <div>
      <Navbar showLogin={false} />
      <ProfilePage />
    </div>
  );
}
