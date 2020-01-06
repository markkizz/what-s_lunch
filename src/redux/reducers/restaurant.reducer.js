import {
  FETCH_RESTAURANT,
  FETCHED_RESTAURANT,
  // POPULARRESTAURANT,
  FETCHED_RESTAURANT_DETAIL,
  RECEIVE_ERROR
} from "../actions/actions";

const initialState = {
  restaurantData: [],
  restaurantDetailPage: {},
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
    case RECEIVE_ERROR:
      return {
        ...state,
        isError: true
      };
    case FETCHED_RESTAURANT_DETAIL:
      return {
        ...state,
        restaurantDetailPage: action.restaurantDetail
      };
    default:
      return state;
  }
};

export default restaurantReducer;
