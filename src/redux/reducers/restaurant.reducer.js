import {
  FETCH_RESTAURANT,
  FETCHED_RESTAURANT,
  // POPULARRESTAURANT,
  FETCHED_RESTAURANT_DETAIL,
  FETCHED_RESTAURANT_REVIEW,
  RECEIVE_ERROR
} from "../actions/actions";

const initialState = {
  restaurantData: [],
  restaurantDetailPage: {},
  restaurantReviewData: [],
  popularRestaurant: [],
  isFetching: false,
  isError: false
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return {
        ...state,
        isFetching: true
      };
    case FETCHED_RESTAURANT:
      return {
        ...state,
        restaurantData: action.data,
        isError: false,
        isFetching: false
      };
    case FETCHED_RESTAURANT_DETAIL:
      return {
        ...state,
        restaurantDetailPage: action.restaurantDetail
      };
    case FETCHED_RESTAURANT_REVIEW:
      return {
        ...state,
        restaurantReviewData: action.restaurantReviewData
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        isError: true
      };

    default:
      return state;
  }
};

export default restaurantReducer;
