import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: userReducer,
  enhancers: composeEnhancer,
});
