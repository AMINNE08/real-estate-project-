import axios from "axios";
import { toast } from "react-toastify";


const api = axios.create({
  baseURL: "http://localhost:3000/api/v1", 
  withCredentials: true, // Ensures cookies are sent

});

export default api;



export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch properties");
    console.error(error);
    throw error;
  }
};

export const getProperty = async(id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch properties");
    console.error(error);
    throw error;
  }
}


export const bookVisit = async (date, propertyId) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;

  if (!email) {
    toast.error("User email not found. Please log in.");
    return;
  }

  const data = { date, propertyId, email };

  try {
    // Replace the infinite recursive call with an API POST request
    const response = await api.post("/visits/book", data, {
      headers: {
        Authorization: `Bearer ${token}`, // If your backend requires auth token
      },
    });
    toast.success("Your visit has been booked successfully!");
    return response.data;
  } catch (error) {
    console.error("Error booking visit:", error);
    toast.error("Something went wrong. Please try again.");
    throw error;
  }
};
