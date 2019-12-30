// * UTILS
const TOKEN = "ACCESS_TOKEN";
const setLocalStorage = token => localStorage.setItem(TOKEN, token);
const removeLocalStorage = token => localStorage.removeItem(TOKEN);

// * TYPE CREATOR *

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

// * ACTION CREATOR *

export function login(user, token) {
  setLocalStorage(token);
  return {
    type: "USER_LOGIN",
    ...user
  };
}

export function logout() {
  removeLocalStorage();
  return {
    type: "USER_LOGOUT"
  };
}
