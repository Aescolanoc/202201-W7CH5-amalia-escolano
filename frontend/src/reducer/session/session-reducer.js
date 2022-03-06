import { actionTypes } from "./action-types";

const initialState = [];

export function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.login:
      return { ...action.payload, isLogged: true };
    case actionTypes.logout:
      return initialState;
    default:
      return state;
  }
}
