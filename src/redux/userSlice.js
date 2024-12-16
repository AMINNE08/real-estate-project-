import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../shared/api";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`); 
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || "null"), 
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); 
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); 
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
