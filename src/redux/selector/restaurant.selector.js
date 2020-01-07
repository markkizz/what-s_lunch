import { createSelector } from "reselect";

const selectStateRestaurants = state => state.restaurant.restaurantData;
const selectStateRestaurantDetail = state =>
  state.restaurant.restaurantDetailPage;
const selectStateRestaurantReviewData = state =>
  state.restaurant.restaurantReviewData;

export const selectRestaurantData = createSelector(
  selectStateRestaurants,
  restaurantData => restaurantData
);

export const selectRestaurantName = createSelector(
  selectStateRestaurants,
  restaurants => restaurants.map(restaurant => restaurant.name)
);

export const selectDistrictRestaurant = createSelector(
  selectStateRestaurants,
  restaurants => [
    ...new Set(restaurants.map(restaurant => restaurant.district))
  ]
);

export const selectCuisineRestaurant = createSelector(
  selectStateRestaurants,
  restaurants => [...new Set(restaurants.map(restaurant => restaurant.cuisine))]
);

export const selectPopularRestaurant = createSelector(
  selectStateRestaurants,
  restaurants => restaurants.filter(restaurant => restaurant.rating >= 4)
);

export const selectTopStarRestaurant = createSelector(
  selectStateRestaurants,
  restaurants => {
    const arrIdAndUserlike = restaurants.map(restaurant => [
      restaurant.id,
      restaurant.user_like
    ]);
    const sortByUserlike = arrIdAndUserlike.sort((a, b) => b[1] - a[1]);
    const sortedRestaurant = sortByUserlike.map(idSorted =>
      restaurants.find(restaurant => restaurant.id === idSorted[0])
    );
    return sortedRestaurant;
  }
);

export const selectTopReviewRestaurant = createSelector(
  selectStateRestaurants,
  restaurants => {
    const arrIdAndUserlike = restaurants.map(restaurant => [
      restaurant.id,
      restaurant.total_review
    ]);
    const sortBytotalReview = arrIdAndUserlike.sort((a, b) => b[1] - a[1]);
    const sortedRestaurant = sortBytotalReview.map(idSorted =>
      restaurants.find(restaurant => restaurant.id === idSorted[0])
    );
    return sortedRestaurant;
  }
);

export const selectRestaurantDetailPage = createSelector(
  selectStateRestaurantDetail,
  restaurant => restaurant
);

export const selectRestaurantReview = createSelector(
  selectStateRestaurantReviewData,
  restaurantReviewData => restaurantReviewData
);
