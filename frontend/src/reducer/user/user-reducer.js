import { actionTypes } from "./action-types";

const initialState = [];

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.loadUsers:
      return [...action.payload];
    case actionTypes.addUser:
      return [...state, action.payload];
    case actionTypes.removeUser:
      return state.filter((item) => item._id !== action.payload._id);
    case actionTypes.updateUser:
      return state.map((item) => (item.id === action.payload.id ? action.payload : item));
    default:
      return state;
  }
}
