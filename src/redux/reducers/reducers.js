import { combineReducers } from "redux";
import userReducer from "./users.reducer";
import restaurantReducer from "../reducers/restaurant.reducer";
import searchReducer from "./search.reducer";

const reducers = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
  search: searchReducer
});

export default reducers;
