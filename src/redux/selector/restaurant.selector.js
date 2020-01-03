import { createSelector } from "reselect";

const selectRestaurants = state => state.restaurantData;

export const selectRestaurantName = createSelector(
  [selectRestaurants],
  restaurants => restaurants.map(restaurant => restaurant.name)
);

export const selectPopularRestaurant = createSelector(
  [selectRestaurants],
  restaurants => restaurants.map(restaurant => restaurant.rating >= 4)
);

export const selectDistrictRestaurant = createSelector(
  [selectRestaurants],
  restaurants => [
    ...new Set(...restaurants.map(restaurant => restaurant.district))
  ]
);
