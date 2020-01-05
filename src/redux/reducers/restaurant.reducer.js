import {
  FETCH_RESTAURANT,
  FETCHED_RESTAURANT,
  // POPULARRESTAURANT,
  // RESTAURANTCUISINE,
  // RESTAURANTDISTRICT,
  RECEIVE_ERROR
} from "../actions/actions";

const initialState = {
  restaurantData: [],
  restaurantName: [],
  popularRestaurant: [],
  cuisine: [],
  district: [],
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
    default:
      return state;
  }
};

export default restaurantReducer;
