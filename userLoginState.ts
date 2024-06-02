// Import the createSlice API from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// This is the initial state of the slice
const initialState = {
  value: null
};

export const userLoginStateReducer = createSlice({
  name: "userLogin", // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    setUserAfterLogin: (state, action) => {
      // This is the reducer function for the deposit action
      state.value = action.payload;
    },
    removeUserAfterLogout: (state, action) => {
      // This is the reducer function for the withdraw action
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setUserAfterLogin,
  removeUserAfterLogout
} = userLoginStateReducer.actions;

// We export the reducer function so that it can be added to the store
export default userLoginStateReducer;
