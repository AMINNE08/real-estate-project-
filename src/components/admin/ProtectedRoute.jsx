import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, requiredRole }) => {
  const userState = useSelector((state) => state.user.user); // Access the user object
  console.log("Redux state:", userState);

  const role = userState?.user?.role; // Safely access the role property

  // Check if the user is authenticated and has the correct role
  if (!role || role !== requiredRole) {
    return <Navigate to="/*" replace />;
  }

  return children;
};

export default ProtectedRoute;
