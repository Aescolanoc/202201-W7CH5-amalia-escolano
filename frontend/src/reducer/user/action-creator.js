import { actionTypes } from "./action-types";

export const loadUsers = (payload) => ({
  type: actionTypes.loadUsers,
  payload,
});

export const addUser = (payload) => ({
  type: actionTypes.addUser,
  payload,
});

export const removeUser = (payload) => ({
  type: actionTypes.removeUser,
  payload,
});

export const updateUser = (payload) => ({
  type: actionTypes.updateUser,
  payload,
});
