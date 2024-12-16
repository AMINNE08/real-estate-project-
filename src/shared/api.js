import axios from "axios";
import { toast } from "react-toastify";


const api = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1", 
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
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')); 
  const email = user?.email; 

  
  if (!email) {
    return;
  }

  const data = {
    date,
    propertyId,
    email, 
    token,
  };


  try {
    await bookVisit(data.date, data.propertyId, data.email, data.token);
    toast.success("Your visit has been booked successfully!");
  } catch (error) {
    console.error("Error booking visit:", error);
    toast.error("Something went wrong, try again please");
  }
};
