import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/reducers";
import thunk from "redux-thunk";

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("store", serializedState);
  } catch (error) {
    console.log(error.message);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    return undefined;
  }
};

const persistStore = loadState();

const store = createStore(
  reducers,
  persistStore,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.subscribe(() => {
  console.log("store state", store.getState());
  saveState(store.getState());
});

export default store;
