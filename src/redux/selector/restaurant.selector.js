import { createSelector } from "reselect";

const selectRestaurants = state => state.restaurant.restaurantData;

export const selectRestaurantData = createSelector(
  selectRestaurants,
  restaurantData => restaurantData
);

export const selectRestaurantName = createSelector(
  selectRestaurants,
  restaurants => restaurants.map(restaurant => restaurant.name)
);

export const selectPopularRestaurant = createSelector(
  selectRestaurants,
  restaurants => restaurants.map(restaurant => restaurant.rating >= 4)
);

export const selectDistrictRestaurant = createSelector(
  selectRestaurants,
  restaurants => [
    ...new Set(restaurants.map(restaurant => restaurant.district))
  ]
);

export const selectCuisineRestaurant = createSelector(
  selectRestaurants,
  restaurants => [...new Set(restaurants.map(restaurant => restaurant.cuisine))]
);
