import { actionTypes } from "./action-types";

export const login = (payload) => ({
  type: actionTypes.login,
  payload,
});

export const logout = () => ({
  type: actionTypes.logout,
});
