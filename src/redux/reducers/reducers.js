import { combineReducers } from "redux";
import userReducer from "./users.reducer";
import restaurantReducer from "../reducers/restaurant.reducer";

const reducers = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer
});

export default reducers;
