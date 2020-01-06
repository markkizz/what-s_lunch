import { WRITEREVIEW } from "../actions/actions";

const initialState = {
  restaurantData: {}
};

const writeReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITEREVIEW:
      return {
        ...state,
        restaurantData: action.restaurantData
      };
    default:
      return state;
  }
};

export default writeReviewReducer;
