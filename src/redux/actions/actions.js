import axios from "axios";

// * UTILS
const TOKEN = "ACCESS_TOKEN";
const setLocalStorage = token => localStorage.setItem(TOKEN, token);
const removeLocalStorage = token => localStorage.removeItem(TOKEN);

// * TYPE CREATOR *

// TODO: add axios get pop topstar topre

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const SEARCH = "SEARCH";
export const ISSEARCHPAGE = "ISSEARCHPAGE";
export const NOTSEARCHPAGE = "NOTSEARCHPAGE";
export const SEARCHPOPULAR = "SEARCHPOPULAR";
export const SEARCHTOPSTAR = "SEARCHTOPSTAR";
export const SEARCHTOPREVIEW = "SEARCHTOPREVIEW";
export const WRITEREVIEW = "WRITEREVIEW";
export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const FETCHED_RESTAURANT = "FETCHED_RESTAURANT";
export const FETCHED_SEARCH_RESTAURANT = "FETCHED_SEARCH_RESTAURANT";
export const FETCHED_RESTAURANT_DETAIL = "FETCHED_RESTAURANT_DETAIL";
export const FETCHED_RESTAURANT_REVIEW = "FETCHED_RESTAURANT_REVIEW";

export const RECEIVE_ERROR = "RECEIVE_ERROR";

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

export const searchPopular = popularRestaurant => ({
  type: "SEARCHPOPULAR",
  searchData: popularRestaurant
});

export const searchTopStar = topstarRestaurant => ({
  type: "SEARCHTOPSTAR",
  searchData: topstarRestaurant
});

export const searchTopReview = topreviewRestaurant => ({
  type: "SEARCHTOPREVIEW",
  searchData: topreviewRestaurant
});

/* restaurant detail - restaurant review */
export const restaurantToReview = restaurantData => ({
  type: "WRITEREVIEW",
  restaurantData
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

export const receive_restaurant_detail = restaurantDetail => ({
  type: "FETCHED_RESTAURANT_DETAIL",
  restaurantDetail
});

export const receive_restaurant_review = reviewData => ({
  type: "FETCHED_RESTAURANT_REVIEW",
  restaurantReviewData: reviewData
});

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

// * CALL FUNC THUNK

export const thunk_action_restaurant = () => (dispatch, getState) => {
  console.log("inside thunk restaurant action");
  dispatch(fetch_restaurant());
  const { restaurantData } = getState().restaurant;
  if (!Array.isArray(restaurantData) || restaurantData.length === 0) {
    return axios
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
  console.log("inside thunk search action");
  const districtPath = `/searchRestaurant?district=${district}`;
  const allPath = `/searchRestaurant?district=${district}&keyword=${keyword}`;
  const queryPath = `/searchRestaurant?q=${q}`;
  const axiosGet = path =>
    axios
      .get(path)
      .then(({ data }) => {
        dispatch(receive_search_restaurant(data));
      })
      .catch(err => console.error(err));
  if (!keyword && district) {
    return axiosGet(districtPath);
  }
  if (!keyword && !district && q) {
    return axiosGet(queryPath);
  }
  return axiosGet(allPath);
};

export const thunk_action_filter_restaurant = (
  district,
  cuisine,
  priceRange
) => (dispatch, getState) => {
  console.log("inside thunk filter action");
  const allPath = `/filterRestaurant?district=${district}&cuisine=${cuisine}&price_range=${priceRange}`;
  const districtPath = `/filterRestaurant?district=${district}&price_range=${priceRange}`;
  const cuisinePath = `/filterRestaurant?cuisine=${cuisine}&price_range=${priceRange}`;
  const axiosFilter = path =>
    axios
      .get(path)
      .then(({ data }) => {
        dispatch(receive_search_restaurant(data));
      })
      .catch(err => console.error(err));
  if (district && !cuisine) {
    return axiosFilter(districtPath);
  }
  if (cuisine && !district && !priceRange) {
    return axiosFilter(cuisinePath);
  }
  return axiosFilter(allPath);
};

export const thunk_action_select_restaurant = id => (dispatch, getstate) => {
  console.log("inside thunk filter action");
  return axios
    .get(`/selectRestaurant/${id}`)
    .then(({ data }) => {
      dispatch(receive_restaurant_detail(data));
    })
    .catch(err => {
      console.error(err);
    });
};

export const thunk_action_review_restaurant = id => (dispatch, getState) => {
  return axios
    .get(`/reviewRestaurant/${id}`)
    .then(({ data }) => {
      dispatch(receive_restaurant_review(data));
    })
    .catch(err => console.error(err));
};
