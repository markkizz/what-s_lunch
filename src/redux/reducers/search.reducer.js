import {
  ISSEARCHPAGE,
  NOTSEARCHPAGE,
  FETCHED_SEARCH_RESTAURANT
} from "../actions/actions";

const initialState = {
  keyword: "",
  searchData: [],
  isSearchPage: false
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ISSEARCHPAGE:
      return {
        ...state,
        keyword: action.keyword,
        isSearchPage: true
      };
    case NOTSEARCHPAGE:
      return {
        ...state,
        isSearchPage: false
      };
    case FETCHED_SEARCH_RESTAURANT:
      return {
        ...state,
        searchData: action.searchData
      };

    default:
      return state;
  }
}

export default searchReducer;
