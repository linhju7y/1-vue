export function authHeader() {
  let user = JSON.parse(localStorage.getItem("usr"));
  if (user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
