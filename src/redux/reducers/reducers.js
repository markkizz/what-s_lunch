import { combineReducers } from "redux";
import userReducer from "./users.reducer";
import restaurantReducer from "./restaurant.reducer";
import searchReducer from "./search.reducer";
import writeReviewReducer from "./writeReview.reducer";

const reducers = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
  search: searchReducer,
  writeReview: writeReviewReducer
});

export default reducers;
