import { createSelector } from "reselect";

const selectRestaurants = state => state.restaurant.restaurantData;
const selectRestaurantDetail = state => state.restaurant.restaurantDetailPage;
const selectRestaurantReviewData = state =>
  state.restaurant.restaurantReviewData;

export const selectRestaurantData = createSelector(
  selectRestaurants,
  restaurantData => restaurantData
);

export const selectRestaurantName = createSelector(
  selectRestaurants,
  restaurants => restaurants.map(restaurant => restaurant.name)
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

export const selectPopularRestaurant = createSelector(
  selectRestaurants,
  restaurants => restaurants.filter(restaurant => restaurant.rating >= 4)
);

export const selectTopStarRestaurant = createSelector(
  selectRestaurants,
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
  selectRestaurants,
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
  selectRestaurantDetail,
  restaurant => restaurant
);

export const selectRestaurantReview = createSelector(
  selectRestaurantReviewData,
  restaurantReviewData => restaurantReviewData
);
