import { createSelector } from "reselect";

const selectWriteReview = state => state.writeReview;

export const selectRestaurantData = createSelector(
  selectWriteReview,
  writeReview => writeReview.restaurantData
);
