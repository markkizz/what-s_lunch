import { createSelector } from "reselect";

const selectSearch = state => state.search.searchData;

export const selectSearchData = createSelector(selectSearch, data => data);
