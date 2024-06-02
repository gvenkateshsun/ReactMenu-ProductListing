import { configureStore } from "@reduxjs/toolkit";
import { userLoginStateReducer } from "./userLoginState";

export const store = configureStore({
  reducer: {
    userLoginState: userLoginStateReducer.reducer
  }
});
