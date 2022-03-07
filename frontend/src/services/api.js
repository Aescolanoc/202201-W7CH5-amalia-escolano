import axios from "axios";

const LOGIN_API = "http://localhost:4500/users/login/";
const USERS_API = "http://localhost:4500/users/";

export function login(user) {
  return axios.post(LOGIN_API, user);
}

export function register(user) {
  return axios.post(USERS_API, user);
}

export function getAllUsers(token) {
  return axios.get(USERS_API, {
    headers: { authorization: "Bearer " + token },
  });
}

export function getUserDetails(id, token) {
  return axios.get(USERS_API + id, {
    headers: { authorization: "Bearer " + token },
  });
}

export function updateUser(user, token) {
  return axios.patch(USERS_API + user._id, user, {
    headers: { authorization: "Bearer " + token },
  });
}
