import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice"; // Adjust path if needed

export const store = configureStore({
  reducer: {
    user: userReducer, // Include userReducer in the store
    auth: authReducer,  // Include authReducer in the store
  },
});
