import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { sessionReducer } from "./session/session-reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
  },
  // reducer: userReducer,
  enhancers: composeEnhancer,
});
