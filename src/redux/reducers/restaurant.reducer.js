import {
  FETCH_RESTAURANT,
  FETCHED_RESTAURANT,
  RECEIVE_ERROR
} from "../actions/actions";

const initialState = {
  restaurantData: [],
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
        isError: false,
        isFetching: false,
        restaurantData: action.data
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
