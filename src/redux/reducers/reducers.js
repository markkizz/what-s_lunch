import { combineReducers } from "redux";
import userReducer from "./users.reducer";

const reducers = combineReducers({
  user: userReducer
});

export default reducers;
