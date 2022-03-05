export function checkToken() {
  let token = localStorage.getItem("token");
  token = JSON.parse(token);
  return token;
}
