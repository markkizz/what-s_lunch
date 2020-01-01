import axios from "axios";

// * UTILS
const TOKEN = "ACCESS_TOKEN";
const setLocalStorage = token => localStorage.setItem(TOKEN, token);
const removeLocalStorage = token => localStorage.removeItem(TOKEN);

// * TYPE CREATOR *

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const SEARCH = "SEARCH";
export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const FETCHED_RESTAURANT = "FETCHED_RESTAURANT";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

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

export const search = keyword => ({
  type: "SEARCH",
  keyword
});

// * FETCH RESTAURANT ACTION CREATOR

export const fetch_restaurant = () => {
  return {
    type: "FETCH_RESTAURANT"
  };
};

export const receive_restaurant = data => {
  return {
    type: "FETCHED_RESTAURANT",
    data
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

// * CALL FUNC THUNK

export const thunk_action_restaurant = () => (dispatch, getState) => {
  console.log("inside thunk action");
  dispatch(fetch_restaurant());
  return axios
    .get("/allRestaurants")
    .then(result => result.data)
    .then(data => {
      dispatch(receive_restaurant(data));
    })
    .catch(err => console.log(err));
};
