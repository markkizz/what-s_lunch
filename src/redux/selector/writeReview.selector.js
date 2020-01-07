import { createSelector } from "reselect";

const selectStateWriteReview = state => state.writeReview;

export const selectRestaurantData = createSelector(
  selectStateWriteReview,
  writeReview => writeReview.restaurantData
);
