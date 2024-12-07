import { createContext, useEffect, useState } from "react";
import api from "../utils/api"


export const AuthContext = createContext();

// AuthContextProvider Component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    console.log("Current User updated:", currentUser); 
    const fetchUser = async () =>{
      try {
        const res = await api.get("/auth/me");
        setCurrentUser(res.data);
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [currentUser]);
  const updateUser = (userData) => {
    console.log("Updating user with:", userData); // Debug log
    setCurrentUser(userData);
  };


  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
;
