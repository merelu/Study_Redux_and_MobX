import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers";

const fistMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션 로깅", action);
  dispatch(action);
};

export const store = configureStore({
  reducer,
  middleware: [fistMiddleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});
