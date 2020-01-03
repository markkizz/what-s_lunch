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
      const popularRating = 4;
      const popularRestaurant = action.data.filter(
        restaurant => restaurant.rating >= popularRating
      );
      const restaurantName = action.data.map(restaurant => restaurant.name);
      const uniqrestaurantName = [...new Set(restaurantName)];
      const allCuisine = action.data.map(restaurant => restaurant.cuisine);
      const uniqCuisine = [...new Set(allCuisine)];
      const district = action.data.map(restaurant => restaurant.district);
      return {
        ...state,
        restaurantData: action.data,
        restaurantName: uniqrestaurantName,
        popularRestaurant,
        cuisine: uniqCuisine,
        district,
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
