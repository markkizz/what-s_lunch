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
export const ISSEARCHPAGE = "ISSEARCHPAGE";
export const NOTSEARCHPAGE = "NOTSEARCHPAGE";
export const FETCHED_SEARCH_RESTAURANT = "FETCHED_SEARCH_RESTAURANT";

// * ACTION CREATOR *
/* user */
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

/* search */
export const isSearchPage = keyword => ({
  type: "ISSEARCHPAGE",
  keyword
});

export const notSearchPage = () => ({
  type: "NOTSEARCHPAGE"
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

export const receive_search_restaurant = searchData => ({
  type: "FETCHED_SEARCH_RESTAURANT",
  searchData
});

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

// * CALL FUNC THUNK

export const thunk_action_restaurant = () => (dispatch, getState) => {
  console.log("inside thunk action");
  dispatch(fetch_restaurant());
  const { restaurantData } = getState().restaurant;
  if (!Array.isArray(restaurantData) || !restaurantData.length) {
    axios
      .get("/allRestaurants")
      .then(result => result.data)
      .then(data => {
        dispatch(receive_restaurant(data));
      })
      .catch(err => console.log(err));
  }
};

export const thunk_action_search_restaurant = (district, keyword, q) => (
  dispatch,
  getState
) => {
  console.log("inside thunk action");
  if (!keyword && district) {
    return axios
      .get(`/searchRestaurant?district=${district}`)
      .then(({ data }) => {
        dispatch(receive_search_restaurant(data));
      })
      .catch(err => console.error(err));
  }
  if (!keyword && !district && q) {
    return axios
      .get(`/searchRestaurant?q=${q}`)
      .then(({ data }) => {
        dispatch(receive_search_restaurant(data));
      })
      .catch(err => console.error(err));
  }
  return axios
    .get(`/searchRestaurant?district=${district}&keyword=${keyword}`)
    .then(({ data }) => {
      dispatch(receive_search_restaurant(data));
    })
    .catch(err => console.error(err));
};
